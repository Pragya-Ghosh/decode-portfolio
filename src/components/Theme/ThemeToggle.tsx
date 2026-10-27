'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa6';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Updated placeholder to match the h-9 w-18 dimensions
  if (!mounted) return <span className="inline-block h-9 w-18" aria-hidden />;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative inline-flex h-9 w-18 shrink-0 cursor-pointer items-center rounded-full border border-border bg-card transition-colors hover:border-accent-light"
    >
      <FaSun className="absolute left-2.5 text-sm text-text-main/60" />
      <FaMoon className="absolute right-2.5 text-sm text-text-main/60" />
      <span
        className={`absolute top-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent-light text-white shadow-sm transition-transform duration-300 ease-out ${
          isDark ? 'translate-x-10' : 'translate-x-1'
        }`}
      >
        {isDark ? <FaMoon className="text-xs" /> : <FaSun className="text-xs" />}
      </span>
    </button>
  );
}