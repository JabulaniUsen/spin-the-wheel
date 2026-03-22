-- Create participants table
CREATE TABLE IF NOT EXISTS participants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  color TEXT NOT NULL CHECK (color IN ('Red', 'Blue', 'Green', 'Yellow', 'White')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  UNIQUE(name)
);

-- Create index on name for faster lookups
CREATE INDEX IF NOT EXISTS idx_participants_name ON participants(name);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_participants_created_at ON participants(created_at DESC);

-- Create index on color for statistics queries
CREATE INDEX IF NOT EXISTS idx_participants_color ON participants(color);

-- Enable Row Level Security (RLS)
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to read participants (public read)
CREATE POLICY "Allow public read access" ON participants
  FOR SELECT
  USING (true);

-- Policy: Allow anyone to insert participants (public insert)
CREATE POLICY "Allow public insert access" ON participants
  FOR INSERT
  WITH CHECK (true);

-- Note: We don't allow UPDATE or DELETE for data integrity
-- Only read and insert operations are allowed

