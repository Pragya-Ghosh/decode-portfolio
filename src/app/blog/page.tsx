import Link from 'next/link';
import BlogCard, { BlogPost } from '@/components/Blog/BlogCard';

export const dynamic = 'force-dynamic';

// Fallback to localhost if the environment variable isn't set yet
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export default async function BlogPage() {
  let blogs: BlogPost[] = [];
  let hasError = false;

  const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'https://decode-blog.onrender.com';

  try {
    const res = await fetch(`${API_URL}/api/blogs`);
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    blogs = data;
  } catch (error) {
    hasError = true;
  }

  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-section-x pb-20">
      <div className="mb-12">
        <Link href="/" className="mb-8 inline-block font-mono text-sm text-accent-light hover:underline">
          &larr; cd /home
        </Link>
        <h1 className="text-4xl font-black text-accent-dark md:text-5xl">
          /var/log/blogs
        </h1>
        <p className="mt-4 text-base text-text-main md:text-lg">
          My thoughts on software, data, and building things.
        </p>
      </div>

      {hasError ? (
        <div className="flex h-40 w-full items-center justify-center font-mono text-sm text-text-main">
          Unable to load logs at this time.
        </div>
      ) : blogs.length === 0 ? (
        <div className="flex h-40 w-full items-center justify-center font-mono text-sm text-text-main">
          No posts found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
}