import { NextRequest, NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase/server'
import { ParticipantInsert } from '@/lib/supabase/types'

// GET: Fetch all participants
export async function GET() {
  try {
    const { data, error } = await supabaseServer
      .from('participants')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching participants:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data, error: null })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST: Create a new participant
export async function POST(request: NextRequest) {
  try {
    const body: ParticipantInsert = await request.json()

    // Validate input
    if (!body.name || !body.color) {
      return NextResponse.json(
        { error: 'Name and color are required' },
        { status: 400 }
      )
    }

    if (!['Red', 'Blue', 'Green', 'Yellow', 'White'].includes(body.color)) {
      return NextResponse.json(
        { error: 'Invalid color. Must be Red, Blue, Green, Yellow, or White' },
        { status: 400 }
      )
    }

    // Check if participant with this name already exists
    const { data: existing } = await supabaseServer
      .from('participants')
      .select('id')
      .eq('name', body.name.trim())
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'This name has already spun! Each person can only spin once.' },
        { status: 409 }
      )
    }

    // Insert new participant
    console.log('💾 Saving participant:', { name: body.name.trim(), color: body.color })
    
    const { data, error } = await supabaseServer
      .from('participants')
      .insert({
        name: body.name.trim(),
        color: body.color,
      })
      .select()
      .single()

    if (error) {
      console.error('❌ Error creating participant:', error)
      console.error('❌ Error details:', JSON.stringify(error, null, 2))
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log('✅ Participant saved successfully:', data)
    return NextResponse.json({ data, error: null }, { status: 201 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

