import { Link } from "react-router-dom";
import { posts as localPosts } from "../data/posts";
import type { Post } from "../data/posts";
import { useEffect, useState } from "react";
import { fetchArticles } from "../lib/api";

type ArticlesProps = {
  posts?: Post[];
  className?: string;
  itemClassName?: string;
  noBorder?: boolean;
  compact?: boolean; // hide excerpts
  postLength?: number;
  onRead?: (post: Post) => void; // optional click handler instead of navigation
};

export function Articles({
  // posts = defaultPosts,
  className = "",
  itemClassName = "",
  compact = false,
  noBorder = true,
  onRead,
}: ArticlesProps) {
  const [posts, setPosts] = useState<Post[]>(localPosts);
  const [, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchArticles()
      .then((res) => {
        if (mounted) setPosts(res);
      })
      .catch((err) => console.warn(err))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={`space-y-10 text-left ${className}`}>
      {posts.map((post, idx) => {
        const excerpt = (post as any).excerpt ?? (post as any).text ?? "";
        return (
          <div key={post.id ?? idx} className={itemClassName}>
            <time
              className="text-zinc-500 relative z-10 order-first mb-3 flex items-center text-sm dark:text-zinc-500 pl-3.5"
              dateTime={post.dateTime}
            >
              {(() => {
                const raw = post.date || post.dateTime || "";
                // Try to parse as date
                const dt = new Date(raw.replace(/T.*$/, ""));
                if (!isNaN(dt.getTime())) {
                  // Force `day month year` order (e.g. "27 November 2025") using en-GB
                  return dt.toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                }
                // fallback: show raw string
                return raw;
              })()}
              <span
                className="absolute inset-y-0 left-0 flex items-center"
                aria-hidden="true"
              >
                {!noBorder ? (
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                ) : null}
              </span>
            </time>
            <div className="md:col-span-3 group relative flex flex-col items-start">
              <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                {post.title}
              </h3>
              {!compact && (
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {excerpt}
                </p>
              )}

              {onRead ? (
                <button
                  onClick={() => onRead(post)}
                  className="text-amber-400 mt-2 inline-block"
                >
                  Read article →
                </button>
              ) : (
                <Link
                  to={`/articles/${post.slug}`}
                  className="text-amber-400 mt-2 inline-block"
                >
                  Read article →
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
