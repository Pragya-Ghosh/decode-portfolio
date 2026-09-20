export default function Hero() {
  return (
    <section
      id="home"
      // mt-28 (112px) clears the fixed ~90px mobile navbar without burying the text
      className="mx-auto mt-28 flex w-full max-w-6xl flex-col items-start px-section-x md:mt-35"
    >
      <div className="flex w-full flex-col items-start text-left">
        {/* Kept mt-4 so it stays visually tight to the wrapper */}
        <h1 className="mt-4 mb-10 flex w-full flex-nowrap items-center text-[clamp(2.1rem,9vw,4.8rem)] leading-[1.2] font-black tracking-[-1px] text-accent-dark md:mt-[50px] md:mb-[70px] md:leading-[1.5]">
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