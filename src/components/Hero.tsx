export default function Hero() {
  return (
    <section id="home" className="mx-auto mt-35 flex w-full max-w-6xl flex-col items-start px-section-x">
      <div className="flex w-full flex-col items-start text-left">
        <h1 
        className="mt-[50px] mb-[70px] flex items-center text-[clamp(3rem,6vw,4.5rem)] leading-[1.5] font-black tracking-[-1px] text-accent-dark"
        style={{ wordSpacing: '8px' }}
        >
        <span className="mr-[24px] shrink-0 font-normal text-accent-light">&gt;</span>
        <span className="animate-typing text-accent-dark">Pragya Ghosh</span>
        <span className="animate-caret"></span>
        </h1>
        <p className="mb-2 text-base leading-relaxed text-text-main md:mb-3 md:text-xl">
          I am a CSE student passionate about building data-driven software solutions.
        </p>
        
        <p className="mb-2 text-base leading-relaxed text-text-main md:mb-3 md:text-xl">
          From complex analytical insights to clean, beautiful interfaces.
        </p>
        
        <p className="m-0 text-base leading-relaxed text-text-main md:text-xl">
          Check out my{' '}
          <a
            href="#projects"
            className="border-b-2 border-current font-bold text-accent-dark transition-opacity hover:opacity-70"
          >
            projects
          </a>{' '}
          below.
        </p>
      </div>
    </section>
  );
}