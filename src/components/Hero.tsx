export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto mt-18 flex w-full max-w-6xl flex-col items-start px-section-x md:mt-35"
    >
      <div className="flex w-full flex-col items-start text-left">
        <h1 className="mt-1 mb-5 flex w-full flex-nowrap items-center text-[clamp(2.1rem,8.5vw,4.8rem)] leading-[1.2] font-black tracking-[-1px] text-accent-dark md:mt-[50px] md:mb-[70px] md:leading-[1.5]">
          <span className="mr-3 shrink-0 font-normal text-accent-light md:mr-6">&gt;</span>
          <span className="typing-wrap flex items-center">
            <span className="typing-text text-accent-dark">Pragya&nbsp;Ghosh</span>
            <span className="typing-caret" />
          </span>
        </h1>
        <p className="mb-2 text-[14px] leading-relaxed text-text-main md:mb-4 md:text-[21px]">
          I am a CSE student passionate about building data-driven software solutions.
        </p>
        <p className="mb-2 text-[14px] leading-relaxed text-text-main md:mb-4 md:text-[21px]">
          From complex problems to seamless, user-centric applications.
        </p>
        <p className="m-0 text-[14px] leading-relaxed text-text-main md:text-[21px]">
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