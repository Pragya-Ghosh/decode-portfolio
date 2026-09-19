import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ id: string }>;
};

// Initialize Supabase directly on the server
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function SingleBlogPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Direct database query on the server
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !blog) notFound();

  return (
    <article className="mx-auto mt-24 w-full max-w-3xl px-section-x pb-20">
      <Link 
        href="/blog" 
        className="mb-8 inline-block font-mono text-sm text-accent-light hover:underline"
      >
        &larr; cd ..
      </Link>
      
      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-black text-accent-dark md:text-5xl">
          {blog.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 font-mono text-sm text-text-main">
          <span>
            {new Date(blog.created_at).toLocaleDateString('en-US', { 
              year: 'numeric', month: 'long', day: 'numeric' 
            })}
          </span>
          <div className="flex gap-2">
            {blog.tags?.map((tag: string) => (
              <span key={tag} className="rounded-md border border-border px-2 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="mb-10 flex min-h-60 w-full items-center justify-center rounded-xl border border-border bg-border font-mono text-sm text-text-main">
        {blog.cover_image_url ? 'Cover Image Rendered Here' : 'No Cover Image'}
      </div>

      <div className="text-lg leading-relaxed text-text-main">
        <p className="whitespace-pre-wrap">{blog.content}</p>
      </div>
    </article>
  );
}