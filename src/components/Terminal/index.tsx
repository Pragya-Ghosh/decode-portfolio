import { terminalLines, terminalTitle } from '@/data/terminal';
import TerminalOutput from './TerminalOutput';
import TerminalPrompt from './TerminalPrompt';

export default function Terminal() {
  return (
    <section className="mx-auto mt-12 w-full max-w-6xl px-section-x md:mt-20">
      <div className="w-full overflow-hidden rounded-lg bg-term-bg font-mono shadow-2xl ring-1 ring-white/5">
        
        {/* kitty tab strip */}
        {/* FIX: Increased header height (h-10/h-11) and tab height (h-8/h-9) */}
        <div className="flex h-10 items-end gap-px bg-term-chrome px-2 md:h-11">
          {/* FIX: Changed text-xs to text-sm (mobile) and text-base (desktop) */}
          <div className="flex h-8 items-center gap-2 rounded-t-md bg-term-tab px-4 text-sm text-term-text md:h-9 md:text-base">
            <span className="text-term-muted">1:</span>
            <span>{terminalTitle}</span>
          </div>
          {/* FIX: Changed text-xs to text-sm (mobile) and text-base (desktop) */}
          <div className="flex h-8 items-center rounded-t-md px-4 text-sm text-term-muted md:h-9 md:text-base">
            2: zsh
          </div>
        </div>

        {/* body */}
        <div className="px-5 py-6 text-base leading-8 text-term-text md:px-8 md:py-8 md:text-lg md:leading-9">
          {terminalLines.map((line) => (
            <div key={line.command} className="mb-5 last:mb-0">
              <span className="block">
                <TerminalPrompt />
                <span className="text-term-text">{line.command}</span>
              </span>
              <TerminalOutput output={line.output} />
            </div>
          ))}

          {/* live prompt */}
          <div>
            <span className="block">
              <TerminalPrompt />
              <span className="terminal-cursor" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}