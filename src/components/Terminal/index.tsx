import { terminalLines, terminalTitle } from '@/data/terminal';
import TerminalOutput from './TerminalOutput';
import TerminalPrompt from './TerminalPrompt';

export default function Terminal() {
  return (
    // px-0 on mobile makes it full edge-to-edge, restores padding on sm and up
    <section className="mx-auto mt-12 w-full max-w-6xl px-0 sm:px-4 md:mt-20 md:px-section-x">
      {/* rounded-none on mobile for flush screen fit, rounded-xl on sm and up */}
      <div className="w-full overflow-hidden rounded-none sm:rounded-xl bg-term-bg font-mono shadow-2xl ring-1 ring-white/10">
        
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

        {/* body - tightened padding and line height to stop vertical stretching */}
        <div className="overflow-x-auto p-3 text-[0.75rem] leading-normal text-term-text sm:p-5 sm:text-sm sm:leading-7 md:px-8 md:py-8 md:text-lg md:leading-9">
          {terminalLines.map((line) => (
            // Reduced gap between commands from mb-5 to mb-3 on mobile
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

          {/* live prompt - reduced top margin */}
          <div className="mt-3 flex items-center gap-2 whitespace-nowrap sm:mt-5">
            <TerminalPrompt />
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </section>
  );
}