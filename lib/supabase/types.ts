export interface Participant {
  id: string
  name: string
  color: 'Red' | 'Blue' | 'Green' | 'Yellow' | 'White'
  created_at: string
}

export interface ParticipantInsert {
  name: string
  color: 'Red' | 'Blue' | 'Green' | 'Yellow' | 'White'
}

