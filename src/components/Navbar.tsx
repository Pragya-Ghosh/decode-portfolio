'use client';

import { useEffect, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import ThemeToggle from '@/components/Theme/ThemeToggle';

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Blog', href: '#blogs', id: 'blogs' },
  ];

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close if the viewport grows to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const linkClass = (id: string) =>
    `transition-colors hover:text-accent-dark ${
      activeSection === id ? 'font-bold text-accent-light' : 'text-text-main'
    }`;

  return (
    <nav className="fixed top-0 right-0 left-0 z-[100] mx-auto flex h-16 w-full max-w-6xl items-center justify-between border-b border-border bg-bg px-section-x md:h-[100px]">
      <a
        href="#home"
        onClick={() => setOpen(false)}
        className="font-['Monoton'] text-[1.8rem] font-normal text-accent-dark no-underline md:text-[2.2rem]"
      >
        Decode
      </a>

      {/* Desktop links */}
      <ul className="m-0 hidden list-none items-center gap-8 p-0 md:flex">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href} className={`text-lg font-medium ${linkClass(link.id)}`}>
              {link.name}
            </a>
          </li>
        ))}
        <li className="flex items-center">
          <ThemeToggle />
        </li>
      </ul>

      {/* Mobile hamburger button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="-mr-2 flex h-10 w-10 items-center justify-center text-xl text-accent-dark md:hidden z-[101]"
      >
        {open ? <FaXmark /> : <FaBars />}
      </button>

      {/* Mobile backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Mobile side drawer panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-[100] w-3/4 max-w-xs bg-bg border-l border-border shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between pt-24 pb-6 px-6 ${
          open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Navigation links */}
        <ul className="m-0 flex list-none flex-col p-0">
          {links.map((link) => (
            <li key={link.id} className="border-b border-border">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-4 text-lg font-medium ${linkClass(link.id)}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle footer at the bottom */}
        <div className="border-t border-border pt-4 flex items-center justify-between">
          <span className="text-base text-text-main">Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}