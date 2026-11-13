create table if not exists public.book_reviews (
 id uuid primary key default gen_random_uuid(),
 book_slug text not null check (book_slug in ('elf-blood','the-world-before','the-goddess-elf','the-listening-world','dark-rain')),
 display_name varchar(40) not null check (char_length(trim(display_name)) between 2 and 40),
 rating smallint not null check (rating between 1 and 5),
 review_text varchar(1200) not null check (char_length(trim(review_text)) between 20 and 1200),
 status text not null default 'pending' check (status in ('pending','approved','rejected')),
 created_at timestamptz not null default now()
);
alter table public.book_reviews enable row level security;
grant select, insert on public.book_reviews to anon, authenticated;
drop policy if exists "Anyone can read approved reviews" on public.book_reviews;
create policy "Anyone can read approved reviews" on public.book_reviews for select to anon, authenticated using (status='approved');
drop policy if exists "Readers can submit pending reviews" on public.book_reviews;
create policy "Readers can submit pending reviews" on public.book_reviews for insert to anon, authenticated with check (status='pending');