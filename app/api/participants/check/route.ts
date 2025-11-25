import { NextRequest, NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase/server'

// GET: Check if a participant with given name already exists
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const name = searchParams.get('name')

    if (!name) {
      return NextResponse.json(
        { error: 'Name parameter is required' },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseServer
      .from('participants')
      .select('id, name, color')
      .eq('name', name.trim())
      .single()

    if (error && error.code !== 'PGRST116') {
      // PGRST116 is "not found" which is expected
      console.error('Error checking participant:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      exists: !!data,
      participant: data || null,
    })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

