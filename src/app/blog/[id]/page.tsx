import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

// Next.js 15 requires params to be typed as a Promise
type Props = {
  params: Promise<{ id: string }>;
};

export default async function SingleBlogPage({ params }: Props) {
  // 1. Await the params to unwrap the Promise
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 2. Fetch using the resolved ID
  const res = await fetch(`http://127.0.0.1:8000/api/blogs/${id}`);
  
  if (!res.ok) notFound();
  
  const blog = await res.json();
  if (blog.error) notFound();

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