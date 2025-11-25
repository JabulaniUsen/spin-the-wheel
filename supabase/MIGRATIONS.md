# Database Migrations

This directory contains SQL migrations for the Spin the Wheel game database.

## Migration Files

### 001_initial_schema.sql

Creates the initial database schema for the application.

**Tables:**
- `participants` - Stores participant information (name, color, timestamp)

**Features:**
- Unique constraint on `name` to prevent duplicate spins
- CHECK constraint on `color` to ensure only valid colors (Red, Blue, Green)
- Indexes for optimized queries:
  - Index on `name` for fast duplicate checks
  - Index on `created_at` for sorted listings
  - Index on `color` for statistics queries
- Row Level Security (RLS) enabled with public read/insert policies

## How to Apply Migrations

### Option 1: Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy the contents of `001_initial_schema.sql`
4. Paste and execute the SQL

### Option 2: Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Apply migrations
supabase db push
```

### Option 3: Direct SQL Connection

If you have direct database access, you can execute the SQL files directly using `psql` or your preferred SQL client.

## Schema Details

### participants Table

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| name | TEXT | NOT NULL, UNIQUE | Participant's name |
| color | TEXT | NOT NULL, CHECK (color IN ('Red', 'Blue', 'Green')) | Assigned color |
| created_at | TIMESTAMP WITH TIME ZONE | NOT NULL, DEFAULT NOW() | When the participant spun |

### Security Policies

- **SELECT**: Public access (anyone can view participants)
- **INSERT**: Public access (anyone can add participants)
- **UPDATE**: Not allowed (data integrity)
- **DELETE**: Not allowed (data integrity)

## Future Migrations

To add new migrations:

1. Create a new file: `002_migration_name.sql`
2. Number migrations sequentially
3. Use descriptive names
4. Document the changes in this file

Example:
```sql
-- 002_add_email_field.sql
-- Adds optional email field to participants table

ALTER TABLE participants 
ADD COLUMN email TEXT;

CREATE INDEX IF NOT EXISTS idx_participants_email ON participants(email);
```

