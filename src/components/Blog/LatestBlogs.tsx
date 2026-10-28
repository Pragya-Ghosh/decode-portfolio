'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import SectionTitle from '@/components/Section/SectionTitle';
import BlogCard from '@/components/Blog/BlogCard';
import { BlogPost } from '@/types/blog';

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Update edge states for disabling/enabling scroll arrows
  const updateEdges = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setBlogs(data.slice(0, 5));
        setLoading(false);
        setTimeout(updateEdges, 50);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, []);

  // Smooth scroll handler for pagination arrows
  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 450; // matches gap-6 (24px)
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section className="mx-auto mt-16 mb-8 sm:mb-10 md:mt-20 md:mb-12.5 flex w-full max-w-6xl flex-col px-6 sm:px-8 md:px-section-x">
      <SectionTitle variant="default" as="h2">
        <span className="mr-4 shrink-0 font-normal text-accent-light md:mr-6">&gt;</span>
        Latest Posts
      </SectionTitle>
      
      <div className="relative flex w-full flex-col">
        
        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={updateEdges}
          className="flex w-full flex-col gap-3 sm:gap-4 md:flex-row md:snap-x md:snap-mandatory md:gap-6 md:overflow-x-auto md:[-ms-overflow-style:none] md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
        >
          {loading ? (
            <div className="flex min-h-[200px] w-full items-center justify-center font-mono text-sm text-text-main">
              Loading content...
            </div>
          ) : hasError ? (
            <div className="flex min-h-[200px] w-full items-center justify-center font-mono text-sm text-text-main">
              Unable to load recent logs at this time.
            </div>
          ) : blogs.length === 0 ? (
            <div className="flex min-h-[200px] w-full items-center justify-center font-mono text-sm text-text-main">
              No posts found.
            </div>
          ) : (
            blogs.map((blog) => (
              <BlogCard 
                key={blog.id} 
                blog={blog} 
                // Card width set to ~46% on desktop to allow a clean 10-12% peek of the next card
                className="w-full shrink-0 snap-start md:w-[calc((100%-3rem)/2.15)]" 
                source="home"
              />
            ))
          )}
        </div>

        {/* Bottom Navigation Row */}
        <div className="mt-4 flex w-full items-center justify-between md:mt-10">
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 border-b-2 border-accent-light pb-1 text-base text-accent-dark transition-colors hover:text-accent-light"
          >
            See all posts <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>

          {!loading && !hasError && blogs.length > 2 && (
            <div className="hidden items-center gap-3 md:flex">
              <button
                onClick={() => scroll('left')}
                disabled={atStart}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-lg text-accent-dark transition-colors hover:border-accent-light hover:text-accent-light disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Scroll left"
              >
                &lt;
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={atEnd}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-lg text-accent-dark transition-colors hover:border-accent-light hover:text-accent-light disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Scroll right"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}