import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import ReactMarkdown from 'react-markdown';
import BlogBackButton from '@/components/Blog/BlogBackButton';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ id: string }>;
};

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function SingleBlogPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !blog) notFound();

  return (
    <article className="mx-auto mt-24 w-full max-w-3xl px-section-x pb-20">
      <Suspense fallback={<div className="mb-6 h-6 w-32 animate-pulse rounded bg-border" />}>
        <BlogBackButton />
      </Suspense>
      
      <header className="mb-10">
        <h1 className="mb-7 text-4xl font-black text-accent-dark md:text-5xl">
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

      {/* Markdown Content Container */}
      <div className="prose prose-lg max-w-none text-text-main leading-relaxed
        prose-headings:text-accent-dark prose-headings:font-bold
        prose-a:text-accent-light prose-a:underline hover:prose-a:text-accent-dark
        prose-strong:text-accent-dark
        prose-code:rounded prose-code:border prose-code:border-border prose-code:bg-border/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-accent-dark prose-code:before:content-none prose-code:after:content-none
        prose-pre:border prose-pre:border-border prose-pre:bg-border/40 prose-pre:text-text-main
        prose-blockquote:border-l-4 prose-blockquote:border-accent-light prose-blockquote:text-text-main
        prose-li:marker:text-accent-light"
      >
        <ReactMarkdown>{blog.content || ''}</ReactMarkdown>
      </div>
    </article>
  );
}