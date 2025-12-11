import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import type { Post } from "../data/posts";
import { posts as localPosts } from "../data/posts";
import { fetchArticleById } from "../lib/api";

const ArticleDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(() =>
    slug ? localPosts.find((p) => p.slug === slug) ?? null : null
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (!slug) return;
    setLoading(true);
    fetchArticleById(slug)
      .then((p) => {
        if (mounted) setPost(p);
      })
      .catch((err) => console.warn(err))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [slug]);

  if (loading) {
    return <div className="max-w-3xl mx-auto px-4 mt-12">Loading article…</div>;
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <p className="mt-4">We couldn't find the article you're looking for.</p>
        <Link to="/articles" className="text-amber-400 mt-4 inline-block">
          Back to articles
        </Link>
      </div>
    );
  }

  return (
    <div className="sm:px-8 mt-12 sm:mt-22">
      <div className="mx-auto max-w-2xl text-left">
        <time
          className="flex items-center text-base text-zinc-500 dark:text-zinc-500"
          dateTime={post.dateTime}
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          <span className="ml-3">
            {(() => {
              const raw = post.date || post.dateTime || "";
              const dt = new Date((raw || "").toString().replace(/T.*$/, ""));
              if (!isNaN(dt.getTime())) {
                return dt.toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
              }
              return raw;
            })()}
          </span>
        </time>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {post.title}
        </h1>
        <div className="mt-6 prose dark:prose-invert">
          {post.featuredImageUrl && (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={post.featuredImageUrl}
              alt={`Featured image for ${post.title}`}
              className="mb-6 rounded"
            />
          )}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        <Link to="/articles" className="text-amber-400 mt-6 inline-block">
          ← Back to articles
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;
