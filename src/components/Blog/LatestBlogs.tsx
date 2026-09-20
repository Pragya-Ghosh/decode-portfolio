'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import SectionTitle from '@/components/Section/SectionTitle';
import BlogCard, { BlogPost } from '@/components/Blog/BlogCard';

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setBlogs(data.slice(0, 4));
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 440;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mx-auto mb-12.5 flex w-full max-w-6xl flex-col px-section-x">
      <SectionTitle variant="default" as="h2">
        <span className="mr-6 shrink-0 font-normal text-accent-light">&gt;</span>
        Latest Posts
      </SectionTitle>
      
      {/* Wrapper to hold the < arrows > and the carousel together */}
      <div className="mt-8 flex w-full items-center gap-2 md:gap-4">
        
        {/* LEFT ARROW */}
        {!loading && !hasError && blogs.length > 0 && (
          <button
            onClick={() => scroll('left')}
            // Hidden on mobile (users can just swipe), visible on md+ screens
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border text-lg text-accent-dark transition-colors hover:border-accent-light hover:text-accent-light md:flex"
            aria-label="Scroll left"
          >
            &lt;
          </button>
        )}

        {/* CAROUSEL */}
        <div 
          ref={scrollContainerRef}
          // Added flex-1 to take up the middle space
          className="flex flex-1 snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {loading ? (
            <div className="flex min-h-[400px] w-full items-center justify-center font-mono text-sm text-text-main">
              Loading logs...
            </div>
          ) : hasError ? (
            <div className="flex min-h-[400px] w-full items-center justify-center font-mono text-sm text-text-main">
              Unable to load recent logs at this time.
            </div>
          ) : blogs.length === 0 ? (
            <div className="flex min-h-[400px] w-full items-center justify-center font-mono text-sm text-text-main">
              No posts found.
            </div>
          ) : (
            blogs.map((blog) => (
              <BlogCard 
                key={blog.id} 
                blog={blog} 
                className="w-[85vw] shrink-0 snap-start md:w-[26rem]" 
                source="home"
              />
            ))
          )}
        </div>

        {/* RIGHT ARROW */}
        {!loading && !hasError && blogs.length > 0 && (
          <button
            onClick={() => scroll('right')}
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border text-lg text-accent-dark transition-colors hover:border-accent-light hover:text-accent-light md:flex"
            aria-label="Scroll right"
          >
            &gt;
          </button>
        )}
      </div>

      <div className="mt-6 flex w-full justify-start md:pl-16">
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