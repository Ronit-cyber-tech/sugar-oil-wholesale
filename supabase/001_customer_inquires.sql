create table if not exists public.customer_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  customer_name text not null,
  phone_number text not null,
  email text,
  product_interested text not null,
  required_quantity text,
  message text not null,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'closed'))
);

alter table public.customer_inquiries enable row level security;

revoke all on table public.customer_inquiries from anon, authenticated;
grant insert on table public.customer_inquiries to service_role;

-- No public SELECT, UPDATE, or DELETE policies are created.