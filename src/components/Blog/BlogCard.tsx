import Link from 'next/link';

// Optional: You can move this interface to a types file later!
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  tags: string[];
  created_at: string;
  cover_image_url?: string | null;
  is_published: boolean;
}

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
      <div className="flex min-h-48 w-full shrink-0 items-center justify-center bg-border font-mono text-sm text-text-main">
        {blog.cover_image_url ? 'Image loaded' : 'Img Placeholder'}
      </div>
      
      <div className="flex flex-1 flex-col gap-2.5 p-5 md:p-8">
        <h3 className="m-0 text-xl font-bold text-accent-dark group-hover:text-accent-light md:text-2xl">
          {blog.title}
        </h3>
        
        <p className="m-0 text-sm leading-relaxed text-text-main line-clamp-3 md:text-base md:leading-7">
          {blog.excerpt}
        </p>
        
        <div className="mt-1 flex flex-wrap gap-2">
          {blog.tags?.map((tag: string) => (
            <span 
              key={tag} 
              className="rounded-md border border-border px-3 py-1 font-mono text-xs text-text-main md:text-[0.85rem]"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-3 font-mono text-xs font-medium text-text-main md:text-[0.85rem]">
          {new Date(blog.created_at).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
          })}
        </div>
      </div>
    </Link>
  );
}