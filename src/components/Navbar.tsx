export default function Navbar({ activeSection }: { activeSection: string }) {
  const links = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Blog', href: '#blogs', id: 'blogs' },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] mx-auto flex h-auto w-full max-w-[1200px] flex-col items-center justify-center border-b border-border bg-bg px-section-x py-[15px] min-h-[80px] md:h-[100px] md:flex-row md:justify-between md:py-0">
      <a href="#home" className="text-[2.2rem] font-normal text-accent-dark no-underline font-['Monoton']">
        Decode
      </a>
      
      <ul className="m-0 mt-3 flex w-full list-none flex-row justify-center gap-6 p-0 md:mt-0 md:w-auto md:justify-end md:gap-8">
        {links.map((link) => (
          <li key={link.id}>
            <a 
              href={link.href} 
              className={`text-lg font-medium transition-colors hover:text-accent-dark ${
                activeSection === link.id 
                  ? 'text-accent-light font-bold' 
                  : 'text-text-main'
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}