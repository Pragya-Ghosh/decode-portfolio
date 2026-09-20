'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SectionTitle from '@/components/Section/SectionTitle';
import BlogCard, { BlogPost } from '@/components/Blog/BlogCard';

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Fetch directly from your internal Next.js API route
    fetch('/api/blogs')
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setBlogs(data.slice(0, 5));
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto mb-12.5 flex w-full max-w-6xl flex-col px-section-x">
      <SectionTitle variant="default" as="h2">
        <span className="mr-6 shrink-0 font-normal text-accent-light">&gt;</span>
        Latest Posts
      </SectionTitle>
      
      <div className="mt-8 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {loading ? (
          <div className="flex min-h-40 w-full items-center justify-center font-mono text-sm text-text-main">
            Loading logs...
          </div>
        ) : hasError ? (
          <div className="flex min-h-40 w-full items-center justify-center font-mono text-sm text-text-main">
            Unable to load recent logs at this time.
          </div>
        ) : blogs.length === 0 ? (
          <div className="flex min-h-40 w-full items-center justify-center font-mono text-sm text-text-main">
            No posts found.
          </div>
        ) : (
          blogs.map((blog) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              // Passing the specific widths and snap rules needed just for this carousel
              className="w-[85vw] shrink-0 snap-start md:w-[26rem]" 
            />
          ))
        )}
      </div>

      <div className="mt-2 flex w-full justify-start">
        <Link 
          href="/blog" 
          className="group flex items-center gap-2 border-b-2 border-accent-light pb-1 text-base text-accent-dark transition-colors hover:text-accent-light"
        >
          See all posts <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}