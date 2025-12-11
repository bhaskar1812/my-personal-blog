import { useState, useEffect } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const AdminCreateArticle = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setUser(data.session?.user ?? null);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      mounted = false;
      sub.subscription?.unsubscribe();
    };
  }, []);

  const sendMagicLink = async () => {
    if (!isSupabaseConfigured || !supabase) {
      setMessage(
        "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env."
      );
      return;
    }
    setMessage(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    setLoading(false);
    if (error) setMessage(String(error.message));
    else setMessage("Check your email for the sign-in link (magic link).");
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSupabaseConfigured || !supabase) {
      setMessage("Supabase is not configured.");
      return;
    }
    if (!user) {
      setMessage(
        "You must be signed in to create articles. Use the magic link sign-in above."
      );
      return;
    }
    setLoading(true);
    try {
      let featuredImagePath: string | null = null;
      if (file) {
        const dest = `articles/${Date.now()}-${file.name}`;
        const { data: uploadData, error: uploadErr } = await supabase.storage
          .from("articles")
          .upload(dest, file, { upsert: true });
        if (uploadErr) {
          setMessage(String(uploadErr.message));
          setLoading(false);
          return;
        }
        featuredImagePath = uploadData.path;
      }

      const payload: any = {
        title,
        slug,
        excerpt,
        content,
        date: new Date().toISOString(),
      };
      if (featuredImagePath) payload.featured_image_path = featuredImagePath;

      const { data, error } = await supabase
        .from("articles")
        .insert([payload])
        .select();
      if (error) {
        console.log(data);
        setMessage(String(error.message));
      } else {
        setMessage("Article created.");
        navigate("/articles");
      }
    } catch (err: any) {
      setMessage(String(err.message ?? err));
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
    if (f) setPreviewUrl(URL.createObjectURL(f));
    else setPreviewUrl(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mt-12 text-left">
      <h1 className="text-5xl font-bold mb-4">Admin — Create Article</h1>

      {!isSupabaseConfigured && (
        <div className="mb-4 text-sm text-red-600">
          Supabase is not configured. Add `VITE_SUPABASE_URL` and
          `VITE_SUPABASE_ANON_KEY` to your `.env`.
        </div>
      )}

      <div className="mb-4 mt-10">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Featured image
        </label>
        <input
          type="file"
          className="appearance-none rounded-md border border-zinc-900/10 bg-white py-2 pr-3 pl-10 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:outline-none sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/15 dark:text-zinc-200 dark:placeholder:text-zinc-500"
          accept="image/*"
          onChange={handleFileChange}
        />
        {previewUrl && (
          <img
            src={previewUrl}
            alt="preview"
            className="mt-2 max-h-48 rounded"
          />
        )}
      </div>

      <section className="mb-8">
        <h2 className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Sign in
        </h2>
        <p className="text-sm text-zinc-600">
          Enter your email to receive a magic link.
        </p>
        <div className="mt-2 flex gap-2">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none rounded-md border border-zinc-900/10 bg-white py-2 pr-3 pl-10 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:outline-none sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/15 dark:text-zinc-200 dark:placeholder:text-zinc-500"
          />
          <button
            onClick={sendMagicLink}
            disabled={loading}
            className="bg-amber-400 px-4 rounded"
          >
            Send link
          </button>
        </div>
      </section>

      <form onSubmit={handleCreate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white py-2 pr-3 pl-10 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:outline-none sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/15 dark:text-zinc-200 dark:placeholder:text-zinc-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Slug
          </label>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white py-2 pr-3 pl-10 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:outline-none sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/15 dark:text-zinc-200 dark:placeholder:text-zinc-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Excerpt
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white py-2 pr-3 pl-10 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:outline-none sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/15 dark:text-zinc-200 dark:placeholder:text-zinc-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="w-full appearance-none rounded-md border border-zinc-900/10 bg-white py-2 pr-3 pl-10 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:outline-none sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/15 dark:text-zinc-200 dark:placeholder:text-zinc-500"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className="bg-amber-400 px-4 py-2 rounded"
          >
            Create Article
          </button>
        </div>
      </form>

      {message && <div className="mt-4 text-sm text-zinc-700">{message}</div>}
    </div>
  );
};

export default AdminCreateArticle;
