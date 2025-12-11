import { supabase, isSupabaseConfigured } from "./supabaseClient";
import type { Post } from "../data/posts";
import { posts as localPosts } from "../data/posts";

// Map Supabase row -> Post type
function mapRowToPost(row: any): Post {
  return {
    id: String(row.id ?? row.slug ?? row.uid),
    date: row.date ?? row.created_at ?? "",
    dateTime: row.date ?? row.created_at ?? "",
    title: row.title ?? "",
    slug: row.slug ?? "",
    excerpt: row.excerpt ?? row.summary ?? "",
    content: row.content ?? row.body ?? "",
    featuredImagePath: row.featured_image_path ?? row.featuredImagePath ?? null,
  } as Post;
}

export async function fetchArticles(): Promise<Post[]> {
  if (!isSupabaseConfigured || !supabase) {
    return Promise.resolve(localPosts);
  }

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("date", { ascending: false });
  if (error) {
    console.warn("Supabase fetchArticles error:", error);
    return localPosts;
  }

  const rows = (data ?? []).map(mapRowToPost);

  // Resolve public URLs for any featured images (if bucket is public)
  const resolved = await Promise.all(
    rows.map(async (r) => {
      if (r.featuredImagePath && supabase) {
        try {
          const { data: urlData } = supabase.storage
            .from("articles")
            .getPublicUrl(r.featuredImagePath);
          r.featuredImageUrl = urlData?.publicUrl ?? null;
        } catch (e) {
          r.featuredImageUrl = null;
        }
      }
      return r;
    })
  );

  return resolved;
}

export async function fetchArticleById(id: string): Promise<Post | null> {
  if (!isSupabaseConfigured || !supabase) {
    const found = localPosts.find((p) => p.id === id);
    return found ?? null;
  }

  // Try find by id or slug
  let { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();
  if (error || !data) {
    // fallback: try by slug
    const { data: bySlug, error: slugErr } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", id)
      .limit(1)
      .single();
    if (slugErr || !bySlug) {
      console.warn(
        "Supabase fetchArticleById not found or error",
        error || slugErr
      );
      return localPosts.find((p) => p.id === id) ?? null;
    }
    data = bySlug as any;
  }

  const post = mapRowToPost(data);

  // resolve featured image public url if available
  if (post.featuredImagePath && supabase) {
    try {
      const { data: urlData } = supabase.storage
        .from("articles")
        .getPublicUrl(post.featuredImagePath);
      post.featuredImageUrl = urlData?.publicUrl ?? null;
    } catch (e) {
      post.featuredImageUrl = null;
    }
  }

  return post;
}
