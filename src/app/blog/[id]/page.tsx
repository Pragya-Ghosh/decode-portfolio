import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import ReactMarkdown from 'react-markdown';
import BlogBackButton from '@/components/Blog/BlogBackButton';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';

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
    <div className="flex min-h-screen flex-col">
      
      <article className="mx-auto mt-24 flex-1 w-full max-w-3xl px-section-x pb-20">
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

      {/* Replaced with your original footer styling, but matched to max-w-3xl */}
      <footer className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between gap-4 border-t border-border px-section-x py-6 text-center md:h-20 md:flex-row md:py-0 md:text-left">
        <p className="m-0 text-[16px] text-text-main transition-colors hover:text-accent-dark">
          © {new Date().getFullYear()} Pragya Ghosh. All rights reserved.
        </p>
        
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/pragyaghosh-decode/"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-text-main transition-transform hover:-translate-y-1 hover:text-accent-light md:text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Pragya-Ghosh"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-text-main transition-transform hover:-translate-y-1 hover:text-accent-light md:text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:pragyarashmighosh@gmail.com"
            className="text-xl text-text-main transition-transform hover:-translate-y-1 hover:text-accent-light md:text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </div>
  );
}