import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 border-t border-border bg-bg px-section-x py-6 text-center md:h-20 md:flex-row md:py-0 md:text-left">
      <p className="m-0 text-sm text-text-main transition-colors hover:text-accent-dark md:text-base">
        A developer is never late, nor is she early, she commits precisely when she means to
      </p>
      
      <div className="flex items-center gap-5">
        <a
          href="https://www.linkedin.com/in/pragyaghosh-decode/"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-text-main transition-transform hover:-translate-y-1 hover:text-accent-light md:text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Pragya-Ghosh"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-text-main transition-transform hover:-translate-y-1 hover:text-accent-light md:text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:pragyarashmighosh@gmail.com"
          className="text-xl text-text-main transition-transform hover:-translate-y-1 hover:text-accent-light md:text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}