# Supabase Integration Setup Guide

This guide will help you set up Supabase for the Spin the Wheel game.

## Prerequisites

- A Supabase account (free tier is sufficient)
- Node.js and npm installed
- Access to your Supabase project dashboard

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in your project details:
   - **Name**: Your project name (e.g., "spin-wheel-game")
   - **Database Password**: Choose a strong password
   - **Region**: Choose the closest region to your users
5. Click "Create new project"
6. Wait for the database to be provisioned (takes ~2 minutes)

## Step 2: Run Database Migration

1. In your Supabase project dashboard, navigate to **SQL Editor**
2. Click "New Query"
3. Copy the entire contents of `supabase/migrations/001_initial_schema.sql`
4. Paste it into the SQL Editor
5. Click "Run" or press `Ctrl+Enter` (Windows/Linux) or `Cmd+Enter` (Mac)
6. You should see a success message: "Success. No rows returned"

### Verify Migration

1. Go to **Table Editor** in the Supabase dashboard
2. You should see a table named `participants`
3. The table should have columns: `id`, `name`, `color`, `created_at`

## Step 3: Get API Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. You'll need these values:
   - **Project URL** (found under "Project URL")
   - **anon/public key** (found under "Project API keys" → "anon public")
   - **service_role key** (found under "Project API keys" → "service_role" - keep this secret!)

## Step 4: Configure Environment Variables

1. In your project root, create a file named `.env.local`:
   ```bash
   touch .env.local
   ```

2. Add your Supabase credentials to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```

3. Replace the placeholder values with your actual credentials from Step 3

**Important Notes:**
- Never commit `.env.local` to git (it should be in `.gitignore`)
- The `NEXT_PUBLIC_` prefix is required for client-side access
- The service role key is optional but useful for admin operations

## Step 5: Install Dependencies

If you haven't already, install the Supabase client:

```bash
npm install @supabase/supabase-js
```

## Step 6: Test the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser to `http://localhost:3000`

3. Test the functionality:
   - Enter a name and spin the wheel
   - Check that the participant appears in the leaderboard
   - Try entering the same name again - it should prevent duplicate spins
   - Open another browser tab and verify real-time updates work

## Troubleshooting

### Error: "Missing Supabase environment variables"

- Check that `.env.local` exists in the project root
- Verify environment variable names are correct (including `NEXT_PUBLIC_` prefix)
- Restart your development server after changing `.env.local`

### Error: "relation 'participants' does not exist"

- The migration hasn't been run yet
- Go back to Step 2 and run the SQL migration

### Error: "duplicate key value violates unique constraint"

- This is expected behavior - names must be unique
- The application will show a friendly error message

### Real-time updates not working

- Check that Row Level Security (RLS) policies are correctly set up
- Verify the migration was run successfully
- Check browser console for any Supabase connection errors

## Database Schema Reference

### participants Table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Auto-generated unique identifier |
| name | TEXT | Participant's name (unique) |
| color | TEXT | Assigned color: 'Red', 'Blue', or 'Green' |
| created_at | TIMESTAMP | When the participant spun (auto-set) |

### Security

- **Public Read**: Anyone can view all participants
- **Public Insert**: Anyone can add a new participant
- **No Update/Delete**: Data integrity is maintained

## Next Steps

- Customize colors or add more options
- Add analytics or reporting features
- Implement admin panel for managing participants
- Add email notifications or other integrations

For more information, see `README_SUPABASE.md` and `supabase/MIGRATIONS.md`.

