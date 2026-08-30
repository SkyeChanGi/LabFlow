# LabFlow Deployment

LabFlow can run as a static local/GitHub Pages app, or as a shared Vercel app backed by Supabase.

## Supabase Setup

1. Create a Supabase project.
2. Open the Supabase SQL Editor.
3. Run `supabase/schema.sql`.
4. In Project Settings, copy:
   - Project URL
   - anon public key

The SQL creates:

- `public.labflow_state`: stores the shared LabFlow workspace JSON.
- `labflow-uploads`: public Storage bucket for Community attachments.
- Public anonymous read/write policies for this MVP.

For stricter lab-only access, replace the anonymous policies with authenticated-user policies after adding Supabase Auth.

## Vercel Setup

Create or import the GitHub repository in Vercel, then add these environment variables:

```txt
VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_PUBLIC_KEY
VITE_SUPABASE_BUCKET=labflow-uploads
```

Vercel settings:

- Build command: `pnpm run build`
- Output directory: `dist`

The build writes `dist/config.js` from the Vercel environment variables. Do not put real keys into `config.js` manually.

## Current Collaboration Model

This MVP stores one shared LabFlow workspace record. Everyone edits the same shared state, and updates are autosaved. Refreshing the page loads the latest cloud state.

This is intentionally simple. For heavy concurrent editing, add per-table records, version history, or Supabase Realtime.
