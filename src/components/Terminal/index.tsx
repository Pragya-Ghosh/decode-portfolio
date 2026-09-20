import { terminalLines, terminalTitle } from '@/data/terminal';
import TerminalOutput from './TerminalOutput';
import TerminalPrompt from './TerminalPrompt';

export default function Terminal() {
  return (
    <section className="mt-12 md:mt-20 px-0 sm:px-4 md:px-section-x 
      w-[100vw] relative left-1/2 -translate-x-1/2 
      sm:static sm:w-full sm:max-w-6xl sm:translate-x-0"
    >

      <div className="w-full overflow-hidden rounded-none sm:rounded-xl bg-term-bg font-mono shadow-2xl ring-0 sm:ring-1 sm:ring-white/10">
        
        {/* kitty tab strip */}
        <div className="flex h-10 items-end gap-1 bg-term-chrome px-2.5 md:h-11 md:px-3">
          <div className="flex h-8 items-center gap-1.5 rounded-t-md bg-term-tab px-3 text-[0.7rem] text-term-text sm:text-sm md:h-9 md:px-4 md:text-base">
            <span className="text-term-muted">1:</span>
            <span className="truncate max-w-[120px] sm:max-w-none">{terminalTitle}</span>
          </div>
          <div className="flex h-8 items-center rounded-t-md px-3 text-[0.7rem] text-term-muted sm:text-sm md:h-9 md:px-4 md:text-base">
            2: zsh
          </div>
        </div>

        {/* body */}
        <div className="overflow-x-auto p-3 text-[0.75rem] leading-normal text-term-text sm:p-5 sm:text-sm sm:leading-7 md:px-8 md:py-8 md:text-lg md:leading-9">
          {terminalLines.map((line) => (
            <div key={line.command} className="mb-3 last:mb-0 sm:mb-5">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <TerminalPrompt />
                <span className="text-term-text">{line.command}</span>
              </div>
              
              <div className="mt-1 min-w-max">
                <TerminalOutput output={line.output} />
              </div>
            </div>
          ))}

          {/* live prompt */}
          <div className="mt-3 flex items-center gap-2 whitespace-nowrap sm:mt-5">
            <TerminalPrompt />
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </section>
  );
}