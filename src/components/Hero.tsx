export default function Hero() {
  return (
    <section 
      id="home" 
      className="mx-auto mt-35 flex w-full max-w-6xl flex-col items-start px-section-x"
    >
      <div className="flex w-full flex-col items-start text-left">
        <h1 
          className="mb-10 mt-8 flex flex-nowrap items-center text-[clamp(1.5rem,7.5vw,4.5rem)] font-black leading-[1.2] tracking-[-1px] text-accent-dark md:mb-[70px] md:mt-[50px] md:leading-[1.5]"
          style={{ wordSpacing: '8px' }}
        >
          <span className="mr-3 shrink-0 font-normal text-accent-light md:mr-[24px]">&gt;</span>
          
          {/* simple flex container to keep the typing text and caret tightly bound */}
          <span className="flex flex-nowrap items-center whitespace-nowrap">
            <span className="animate-typing text-accent-dark">Pragya Ghosh</span>
            <span className="animate-caret -ml-2 shrink-0 md:-ml-1"></span>
          </span>
        </h1>
        
        {/* 17px on mobile, 20px on desktop */}
        <p className="mb-3 text-[17px] leading-relaxed text-text-main md:mb-4 md:text-[20px]">
          I am a CSE student passionate about building data-driven software solutions.
        </p>
        
        <p className="mb-3 text-[17px] leading-relaxed text-text-main md:mb-4 md:text-[20px]">
          From complex analytical insights to clean, beautiful interfaces.
        </p>
        
        <p className="m-0 text-[17px] leading-relaxed text-text-main md:text-[20px]">
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