'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function BlogBackButton() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  const isHome = from === 'home';
  const href = isHome ? '/#blogs' : '/blog';
  const label = isHome ? 'Back to Home' : 'Back to All Posts';

  return (
    <div className="mb-6">
      <Link 
        href={href} 
        className="group inline-flex items-center gap-2 text-base text-accent-dark transition-colors hover:text-accent-light"
      >
        <span className="transition-transform group-hover:-translate-x-1">&larr;</span> {label}
      </Link>
    </div>
  );
}