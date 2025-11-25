# Supabase Setup Guide

This project uses Supabase for data persistence. Follow these steps to set up:

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Wait for the database to be provisioned

## 2. Run Database Migrations

### Option A: Using Supabase Dashboard (Recommended for beginners)

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy the contents of `supabase/migrations/001_initial_schema.sql`
4. Paste and run the SQL in the SQL Editor

### Option B: Using Supabase CLI (Advanced)

```bash
# Install Supabase CLI (if not already installed)
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push
```

## 3. Get Your API Keys

1. In your Supabase project dashboard, go to **Settings** > **API**
2. Copy the following:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (optional, for admin operations)

## 4. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in your Supabase credentials in `.env.local`

## 5. Database Schema

The migration creates a `participants` table with:
- `id` (UUID, primary key)
- `name` (TEXT, unique)
- `color` (TEXT, constrained to 'Red', 'Blue', 'Green')
- `created_at` (TIMESTAMP)

Row Level Security (RLS) is enabled:
- **Read**: Public (anyone can view participants)
- **Insert**: Public (anyone can add participants)
- **Update/Delete**: Not allowed (data integrity)

## Features

- ✅ Persistent storage of all spins
- ✅ Real-time updates when new participants join
- ✅ Prevents duplicate names (unique constraint)
- ✅ Automatic timestamp tracking
- ✅ Optimized indexes for fast queries

