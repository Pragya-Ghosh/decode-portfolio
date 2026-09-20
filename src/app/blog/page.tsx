import Link from 'next/link'; 
import BlogCard from '@/components/Blog/BlogCard';
import { BlogPost } from '@/types/blog';
import SectionTitle from '@/components/Section/SectionTitle';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

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
    // Updated mobile padding to px-6 sm:px-8 to match the narrow Medium-style column width
    <div className="mx-auto mt-6 sm:mt-8 w-full max-w-6xl px-6 sm:px-8 md:px-section-x pb-20">
      {/* Back button linking directly to home blog section */}
      <div className="mb-6">
        <Link 
          href="/#blogs" 
          className="group inline-flex items-center gap-2 text-base text-accent-dark transition-colors hover:text-accent-light"
        >
          <span className="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Home
        </Link>
      </div>

      <SectionTitle variant="default" as="h1">
        <span className="mr-4 shrink-0 font-normal text-accent-light md:mr-6">&gt;</span>
        All Posts
      </SectionTitle>

      {hasError ? (
        <div className="flex min-h-40 w-full items-center justify-center font-mono text-base text-text-main">
          Unable to load posts at this time.
        </div>
      ) : blogs.length === 0 ? (
        <div className="flex min-h-40 w-full items-center justify-center font-mono text-base text-text-main">
          No posts found.
        </div>
      ) : (
        // Changed mobile grid/stack to use a clean vertical column with gap-6, returning to 3-col grid on desktop (md:grid-cols-2 lg:grid-cols-3)
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}