export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto mt-35 flex w-full max-w-6xl flex-col items-start px-section-x"
    >
      <div className="flex w-full flex-col items-start text-left">
        <h1 className="mt-8 mb-10 flex w-full flex-nowrap items-center text-[clamp(2.1rem,9vw,4.8rem)] leading-[1.2] font-black tracking-[-1px] text-accent-dark md:mt-[50px] md:mb-[70px] md:leading-[1.5]">
          <span className="mr-3 shrink-0 font-normal text-accent-light md:mr-6">&gt;</span>
          <span className="typing-wrap flex items-center">
            <span className="typing-text text-accent-dark">Pragya&nbsp;Ghosh</span>
            <span className="typing-caret" />
          </span>
        </h1>
        <p className="mb-3 text-[15px] leading-relaxed text-text-main md:mb-4 md:text-[20px]">
          I am a CSE student passionate about building data-driven software solutions.
        </p>
        <p className="mb-3 text-[15px] leading-relaxed text-text-main md:mb-4 md:text-[20px]">
          From complex analytical insights to clean, beautiful interfaces.
        </p>
        <p className="m-0 text-[15px] leading-relaxed text-text-main md:text-[20px]">
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