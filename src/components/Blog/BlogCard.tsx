import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  blog: BlogPost;
  className?: string;
  source?: 'home' | 'archive';
}

export default function BlogCard({ blog, className = '', source = 'archive' }: BlogCardProps) {
  const href = `/blog/${blog.id}?from=${source}`;

  return (
    <div
      // Horizontal row on mobile / vertical card on desktop, colour-change hover
      className={`group flex flex-row items-center gap-4 border-t border-border bg-transparent pt-6 transition-colors max-md:first:border-t-0 max-md:first:pt-0 md:flex-col md:items-stretch md:overflow-hidden md:rounded-xl md:border md:border-border md:bg-card md:p-0 md:pt-0 md:hover:border-accent-light md:hover:bg-accent-light/5 md:hover:shadow-[0_0_15px_color-mix(in_srgb,var(--accent-light)_20%,transparent)] ${className}`}
    >
      {/* Mobile thumbnail */}
      <Link
        href={href}
        className="flex h-20 w-28 shrink-0 items-center justify-center rounded-lg bg-border font-mono text-xs text-text-main md:hidden"
      >
        {blog.cover_image_url ? 'Img' : 'Placeholder'}
      </Link>

      {/* Desktop cover */}
      <Link
        href={href}
        className="hidden min-h-48 w-full shrink-0 items-center justify-center bg-border font-mono text-sm text-text-main md:flex"
      >
        {blog.cover_image_url ? 'Image loaded' : 'Img Placeholder'}
      </Link>

      {/* Content wrapper */}
      <div className="flex flex-1 flex-col p-0 md:pt-4 md:px-8 md:pb-8">
        {/* Title */}
        <h3 className="m-0 text-[0.95rem] font-bold leading-snug text-accent-dark md:mb-3 md:text-[clamp(1.25rem,4vw,1.5rem)] md:leading-tight lg:text-2xl">
          <Link href={href} className="line-clamp-2 transition-colors group-hover:text-accent-light">
            {blog.title}
          </Link>
        </h3>

        {/* Excerpt (desktop only) */}
        <p className="m-0 hidden text-[0.95rem] leading-relaxed text-text-main md:line-clamp-3 md:block md:text-[1.025rem] md:leading-7">
          {blog.excerpt}
        </p>

        {/* Tags (desktop only) */}
        <div className="mt-3 hidden flex-wrap gap-2 md:flex">
          {blog.tags?.map((tag: string) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-accent-light/25 px-2.5 py-1 text-[0.75rem] font-medium text-accent-dark transition-colors hover:border-accent-light/60 hover:bg-accent-light/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Date, plus "Read more" on mobile */}
        <div className="mt-3 flex flex-col gap-1 md:mt-auto md:flex-row md:pt-4">
          <span className="font-mono text-[0.75rem] text-text-main/80 md:text-base md:text-text-main">
            {new Date(blog.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
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