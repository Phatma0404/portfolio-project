import { useEffect, useState } from "react";

const MEDIUM_USERNAME = "fatmakazimova26";
const FEED_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

type Post = {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  tags: string[];
  thumbnail: string | null;
};

type FeedItem = {
  title: string;
  pubDate: string;
  link: string;
  description?: string;
  content?: string;
  thumbnail?: string;
  categories?: string[];
};

function formatDate(raw: string) {
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return raw;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function makeExcerpt(html: string, max = 160) {
  const text = stripHtml(html);
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "…";
}

function findImage(html: string): string | null {
  const m = html.match(/<img[^>]+src="([^">]+)"/i);
  return m ? m[1] : null;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(FEED_URL)
      .then((r) => {
        if (!r.ok) throw new Error("Feed could not be loaded.");
        return r.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (data.status !== "ok") {
          throw new Error(data.message || "Feed unavailable.");
        }
        const items: FeedItem[] = data.items || [];
        const mapped: Post[] = items.map((item) => {
          const html = item.content || item.description || "";
          return {
            title: item.title,
            date: formatDate(item.pubDate),
            excerpt: makeExcerpt(item.description || item.content || ""),
            link: item.link,
            tags: (item.categories || []).slice(0, 3),
            thumbnail:
              (item.thumbnail && item.thumbnail.length > 0
                ? item.thumbnail
                : null) || findImage(html),
          };
        });
        setPosts(mapped);
        setLoading(false);
      })
      .catch((err: Error) => {
        if (cancelled) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-14">
        <p className="text-xs font-semibold text-[#E8472A] uppercase tracking-widest mb-3">
          Blog
        </p>
        <h1 className="text-4xl font-bold text-white mb-3">Writing</h1>
        <p className="text-zinc-400 max-w-2xl">
          Notes on frontend craft, accessibility, and the tools I use day to
          day. Posts are pulled live from my{" "}
          <a
            href={`https://medium.com/@${MEDIUM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E8472A] hover:underline"
          >
            Medium
          </a>
          .
        </p>
      </div>

      {/* States */}
      {loading && <SkeletonGrid />}
      {!loading && error && <ErrorState message={error} />}
      {!loading && !error && posts.length === 0 && <EmptyState />}

      {/* Posts grid */}
      {!loading && !error && posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors flex flex-col"
            >
              {/* Cover */}
              <div className="w-full h-40 rounded-xl bg-white/5 mb-6 overflow-hidden flex items-center justify-center">
                {post.thumbnail ? (
                  <img
                    src={post.thumbnail}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-zinc-600 text-sm">Cover</span>
                )}
              </div>

              <p className="text-xs text-zinc-500 mb-2">{post.date}</p>

              <h2 className="text-white font-semibold text-lg mb-2 group-hover:text-[#E8472A] transition-colors">
                {post.title}
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-zinc-400 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col animate-pulse"
        >
          <div className="w-full h-40 rounded-xl bg-white/5 mb-6" />
          <div className="h-3 w-24 bg-white/10 rounded mb-3" />
          <div className="h-5 w-3/4 bg-white/10 rounded mb-3" />
          <div className="h-3 w-full bg-white/10 rounded mb-2" />
          <div className="h-3 w-5/6 bg-white/10 rounded" />
        </div>
      ))}
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
      <p className="text-white font-semibold mb-2">Couldn't load posts</p>
      <p className="text-zinc-400 text-sm mb-4">{message}</p>
      <a
        href={`https://medium.com/@${MEDIUM_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-[#E8472A] hover:underline"
      >
        Visit Medium directly →
      </a>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
      <p className="text-zinc-400">No posts yet — check back soon.</p>
    </div>
  );
}
