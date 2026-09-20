import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  blog: BlogPost;
  className?: string;
  source?: 'home' | 'archive';
}

export default function BlogCard({ blog, className, source = 'archive' }: BlogCardProps) {
  const href = `/blog/${blog.id}?from=${source}`;

  return (
    <div 
      // Horizontal row on mobile 
      className={`group flex flex-row items-center gap-4 border-t border-border pt-6 bg-transparent first:border-t-0 first:pt-0 transition-all md:flex-col md:overflow-hidden md:rounded-xl md:border md:border-border md:bg-white md:p-0 md:pt-0 md:hover:-translate-y-1 md:hover:shadow-lg ${className}`}
    >
      {/* Rectangular (landscape) thumbnail on mobile */}
      <Link href={href} className="flex h-20 w-28 shrink-0 items-center justify-center rounded-lg bg-border font-mono text-xs text-text-main md:hidden">
        {blog.cover_image_url ? 'Img' : 'Placeholder'}
      </Link>

      {/* Desktop cover image link */}
      <Link href={href} className="hidden min-h-48 w-full shrink-0 items-center justify-center bg-border font-mono text-sm text-text-main md:flex">
        {blog.cover_image_url ? 'Image loaded' : 'Img Placeholder'}
      </Link>
      
      <div className="flex flex-1 flex-col p-0 md:p-8">
        
        {/* Title links to post */}
        <h3 className="m-0 text-[0.95rem] font-bold leading-snug text-accent-dark md:mb-2 md:text-[clamp(1.15rem,3.5vw,1.5rem)] md:leading-tight">
          <Link href={href} className="line-clamp-3 transition-colors hover:text-accent-light">
            {blog.title}
          </Link>
        </h3>
        
        {/* Excerpt - Hidden on mobile list, visible on desktop */}
        <p className="m-0 hidden text-sm leading-relaxed text-text-main md:block md:line-clamp-3 md:text-base md:leading-7">
          {blog.excerpt}
        </p>
        
        {/* Tags - Hidden on mobile, visible on desktop */}
        <div className="mt-1 hidden flex-wrap gap-2 md:flex">
          {blog.tags?.map((tag: string) => (
            <span 
              key={tag} 
              className="rounded-md border border-border px-3 py-1 font-mono text-xs text-text-main md:text-[0.85rem]"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Stacked Date and "Read more >" link on mobile / Date only on desktop */}
        <div className="mt-2 flex flex-col gap-1 md:mt-auto md:flex-row md:pt-3">
          <span className="font-mono text-[0.75rem] text-text-main/80 md:text-[0.85rem] md:text-text-main">
            {new Date(blog.created_at).toLocaleDateString('en-US', {
              year: 'numeric', month: 'short', day: 'numeric'
            })}
          </span>
          
          <Link 
            href={href}
            className="text-[0.75rem] font-medium text-text-main transition-colors hover:text-accent-dark md:hidden"
          >
            Read more &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}