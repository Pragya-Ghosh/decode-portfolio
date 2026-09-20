import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  blog: BlogPost;
  className?: string;
  source?: 'home' | 'archive';
}

export default function BlogCard({ blog, className, source = 'archive' }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${blog.id}?from=${source}`}
      className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {/* Hidden entirely on mobile for speed, visible on desktop */}
      <div className="hidden min-h-48 w-full shrink-0 items-center justify-center bg-border font-mono text-sm text-text-main md:flex">
        {blog.cover_image_url ? 'Image loaded' : 'Img Placeholder'}
      </div>
      
      <div className="flex flex-1 flex-col gap-2 p-4 md:p-8">
        
        {/* Title with fluid clamp scale */}
        <h3 className="m-0 text-[clamp(1.15rem,3.5vw,1.5rem)] font-bold leading-tight text-accent-dark group-hover:text-accent-light md:text-2xl">
          {blog.title}
        </h3>
        
        {/* Excerpt - slightly shorter line-clamp on mobile for quick skimming */}
        <p className="m-0 text-sm leading-relaxed text-text-main line-clamp-2 md:line-clamp-3 md:text-base md:leading-7">
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
        
        <div className="mt-auto pt-2 font-mono text-xs font-medium text-text-main md:pt-3 md:text-[0.85rem]">
          {new Date(blog.created_at).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
          })}
        </div>
      </div>
    </Link>
  );
}