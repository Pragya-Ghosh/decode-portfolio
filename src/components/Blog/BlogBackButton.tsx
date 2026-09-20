'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BlogBackButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  const isHome = from === 'home';
  const label = isHome ? 'Back to Home' : 'Back to All Posts';
  const fallbackHref = isHome ? '/#blogs' : '/blog';

  const handleBack = () => {
    const referrer = document.referrer;
    // If they came from our site, use native back for perfect pixel restoration
    if (referrer && referrer.includes(window.location.host)) {
      router.back();
    } else {
      // If opened in a new tab, fallback to normal navigation
      router.push(fallbackHref);
    }
  };

  return (
    <div className="mb-6">
      <button 
        onClick={handleBack}
        className="group inline-flex cursor-pointer items-center gap-2 border-none bg-transparent p-0 text-base text-accent-dark transition-colors hover:text-accent-light"
      >
        <span className="transition-transform group-hover:-translate-x-1">&larr;</span> {label}
      </button>
    </div>
  );
}