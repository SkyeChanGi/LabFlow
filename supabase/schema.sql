create table if not exists public.labflow_state (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.labflow_state enable row level security;

drop policy if exists "LabFlow can read shared state" on public.labflow_state;
create policy "LabFlow can read shared state"
on public.labflow_state
for select
to anon
using (true);

drop policy if exists "LabFlow can insert shared state" on public.labflow_state;
create policy "LabFlow can insert shared state"
on public.labflow_state
for insert
to anon
with check (id = 'main');

drop policy if exists "LabFlow can update shared state" on public.labflow_state;
create policy "LabFlow can update shared state"
on public.labflow_state
for update
to anon
using (id = 'main')
with check (id = 'main');

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('labflow-uploads', 'labflow-uploads', true, 52428800, null)
on conflict (id) do update set public = true, file_size_limit = 52428800;

drop policy if exists "LabFlow can read uploaded files" on storage.objects;
create policy "LabFlow can read uploaded files"
on storage.objects
for select
to anon
using (bucket_id = 'labflow-uploads');

drop policy if exists "LabFlow can upload files" on storage.objects;
create policy "LabFlow can upload files"
on storage.objects
for insert
to anon
with check (bucket_id = 'labflow-uploads');
