import Link from 'next/link'; 
import BlogCard, { BlogPost } from '@/components/Blog/BlogCard';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

// Initialize Supabase directly on the server
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function BlogArchivePage() {
  let blogs: BlogPost[] = [];
  let hasError = false;

  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    blogs = data || [];
  } catch (error) {
    hasError = true;
  }

  return (
    <div className="mx-auto mt-24 w-full max-w-6xl px-section-x pb-20">
      <h1 className="mb-8 font-mono text-4xl font-bold text-accent-dark">
        <span className="mr-4 text-accent-light">&gt;</span>All Posts
      </h1>

      {hasError ? (
        <div className="flex min-h-40 w-full items-center justify-center font-mono text-sm text-text-main">
          Unable to load posts at this time.
        </div>
      ) : blogs.length === 0 ? (
        <div className="flex min-h-40 w-full items-center justify-center font-mono text-sm text-text-main">
          No posts found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}