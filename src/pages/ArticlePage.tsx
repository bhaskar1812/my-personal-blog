import Articles from "../components/Articles";
import { useEffect, useState } from "react";
import type { Post } from "../data/posts";
import { posts as defaultPosts } from "../data/posts";
import { fetchArticles } from "../lib/api";

const ArticlePage = () => {
  const [posts, setPosts] = useState<Post[]>(defaultPosts);
  const [loading, setLoading] = useState(false);

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
    <div className="sm:px-8 mt-12 sm:mt-22">
      <div className="space-y-10 text-left mx-20">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Bhaskar talks about XYZ
        </h1>
        <div className="mt-8 prose dark:prose-invert" data-mdx-content="true">
          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hi there! This is my blog where I share my thoughts on Information
              Technology and other XYZ topics. I'd love to hear from you, so
              please leave a comment or say hello.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <input
              placeholder="Search articles"
              className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white py-2 pr-3 pl-10 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:outline-none sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/15 dark:text-zinc-200 dark:placeholder:text-zinc-500"
              type="search"
              name="search"
            />
          </div>
        </div>
        <div className="mt-16 sm:mt-20">
          <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <div className="flex max-w-3xl flex-col space-y-16">
              {loading ? (
                <div className="text-sm text-zinc-500">Loading articles…</div>
              ) : (
                <Articles
                  posts={posts}
                  itemClassName="md:grid md:grid-cols-4 md:items-baseline"
                  className="w-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
