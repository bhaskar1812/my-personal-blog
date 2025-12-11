-- Supabase seed for `articles` table
-- Run this in Supabase SQL editor (SQL -> New query) to create table and insert sample posts.

create table if not exists articles (
  id bigserial primary key,
  slug text unique,
  title text not null,
  excerpt text,
  content text,
  date timestamptz default now()
);

insert into articles (slug, title, excerpt, content, date) values
('how-i-optimized-react-apps', 'How I Optimized React Apps for Performance', 'A practical guide to profiling, code-splitting, caching, and UI performance tuning.', 'In this article I walk through concrete steps to profile React apps, use code-splitting, cache resources effectively, and tune UI rendering.', '2025-11-27'),
('my-trip-to-ooty', 'My Trip to Ooty – A Peaceful Tech Detox', 'A refreshing break and what it taught me about mental clarity and productivity.', 'A personal recount of traveling to Ooty, disconnecting from work, and how stepping away helped me return with clearer priorities and better focus.', '2025-08-10'),
('understanding-micro-frontends', 'Understanding Micro-frontends', 'Explaining how large companies scale UI development across teams.', 'An overview of micro-frontend patterns, integration strategies, pros and cons, and practical tips for getting started without over-engineering.', '2025-07-05')
on conflict (slug) do nothing;
