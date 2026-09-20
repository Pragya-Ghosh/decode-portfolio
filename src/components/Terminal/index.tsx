import { terminalLines, terminalTitle } from '@/data/terminal';
import TerminalOutput from './TerminalOutput';
import TerminalPrompt from './TerminalPrompt';

export default function Terminal() {
  return (
    <section className="mx-auto mt-12 w-full max-w-6xl px-3 sm:px-4 md:mt-20 md:px-section-x">
      <div className="w-full overflow-hidden rounded-lg bg-term-bg font-mono shadow-2xl ring-1 ring-white/5">
        
        {/* kitty tab strip */}
        <div className="flex h-9 items-end gap-1 bg-term-chrome px-2 md:h-11 md:px-3">
          <div className="flex h-7 items-center gap-1.5 rounded-t-md bg-term-tab px-2.5 text-xs text-term-text sm:text-sm md:h-9 md:px-4 md:text-base">
            <span className="text-term-muted">1:</span>
            <span className="truncate max-w-[120px] sm:max-w-none">{terminalTitle}</span>
          </div>
          <div className="flex h-7 items-center rounded-t-md px-2.5 text-xs text-term-muted sm:text-sm md:h-9 md:px-4 md:text-base">
            2: zsh
          </div>
        </div>

        {/* body */}
        <div className="p-3 text-xs leading-relaxed text-term-text sm:p-4 sm:text-sm sm:leading-7 md:px-8 md:py-8 md:text-lg md:leading-9 overflow-x-auto">
          {terminalLines.map((line) => (
            <div key={line.command} className="mb-4 last:mb-0">
              <span className="flex flex-wrap items-center gap-1.5">
                <TerminalPrompt />
                <span className="text-term-text break-all">{line.command}</span>
              </span>
              <TerminalOutput output={line.output} />
            </div>
          ))}

          {/* live prompt */}
          <div>
            <span className="flex flex-wrap items-center gap-1.5">
              <TerminalPrompt />
              <span className="terminal-cursor" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}