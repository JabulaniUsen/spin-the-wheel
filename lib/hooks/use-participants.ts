import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { Participant } from '@/lib/supabase/types'

export function useParticipants() {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Fetch initial participants
    const fetchParticipants = async () => {
      try {
        setLoading(true)
        console.log('🔄 Fetching participants from Supabase...')
        
        const { data, error: fetchError } = await supabase
          .from('participants')
          .select('*')
          .order('created_at', { ascending: false })

        if (fetchError) {
          console.error('❌ Supabase fetch error:', fetchError)
          throw fetchError
        }

        console.log('✅ Participants fetched:', data?.length || 0, 'participants')
        console.log('📋 Participants data:', data)
        
        setParticipants(data || [])
        setError(null)
      } catch (err) {
        console.error('❌ Error fetching participants:', err)
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch participants'
        setError(errorMessage)
        // Don't block UI on error - show empty array
        setParticipants([])
      } finally {
        setLoading(false)
      }
    }

    fetchParticipants()

    // Subscribe to real-time changes
    console.log('🔔 Setting up real-time subscription...')
    const channel = supabase
      .channel('participants-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'participants',
        },
        async (payload) => {
          console.log('🔔 Real-time update received:', payload.eventType)
          // Refetch on any change
          const { data, error: fetchError } = await supabase
            .from('participants')
            .select('*')
            .order('created_at', { ascending: false })

          if (!fetchError && data) {
            console.log('✅ Participants updated via real-time:', data.length)
            setParticipants(data)
          } else if (fetchError) {
            console.error('❌ Error in real-time update:', fetchError)
          }
        }
      )
      .subscribe((status) => {
        console.log('📡 Subscription status:', status)
        if (status === 'SUBSCRIBED') {
          console.log('✅ Real-time subscription active')
        }
      })

    return () => {
      console.log('🔌 Cleaning up subscription...')
      supabase.removeChannel(channel)
    }
  }, [])

  return { participants, loading, error, refetch: async () => {
    try {
      const { data, error: fetchError } = await supabase
        .from('participants')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError
      setParticipants(data || [])
    } catch (err) {
      console.error('Error refetching participants:', err)
    }
  } }
}

