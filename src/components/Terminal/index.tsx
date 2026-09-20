import { terminalLines, terminalTitle } from '@/data/terminal';
import TerminalOutput from './TerminalOutput';
import TerminalPrompt from './TerminalPrompt';

export default function Terminal() {
  return (
    <section className="mx-auto mt-12 w-full max-w-6xl px-6 sm:px-8 md:mt-20 md:px-section-x">
      <div className="w-full overflow-hidden rounded-xl bg-term-bg font-mono shadow-2xl ring-1 ring-white/10">
        
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

        {/* body - horizontal scrolling for authentic terminal behavior */}
        <div className="overflow-x-auto p-4 text-[0.75rem] leading-loose text-term-text sm:p-5 sm:text-sm sm:leading-7 md:px-8 md:py-8 md:text-lg md:leading-9">
          {terminalLines.map((line) => (
            <div key={line.command} className="mb-5 last:mb-0">
              {/* Removed flex-wrap and break-all; added whitespace-nowrap so it scrolls like a real terminal instead of shattering text */}
              <div className="flex items-center gap-2 whitespace-nowrap">
                <TerminalPrompt />
                <span className="text-term-text">{line.command}</span>
              </div>
              
              {/* Added a wrapper for output to ensure it also scrolls nicely if lines are long */}
              <div className="mt-1 min-w-max">
                <TerminalOutput output={line.output} />
              </div>
            </div>
          ))}

          {/* live prompt */}
          <div className="mt-5 flex items-center gap-2 whitespace-nowrap">
            <TerminalPrompt />
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </section>
  );
}