import { terminalHost, terminalPath, terminalUser } from '@/data/terminal';

export default function TerminalPrompt() {
  return (
    <span className="shrink-0 select-none">
      <span className="text-term-muted">[</span>
      <span className="text-term-user">
        {terminalUser}@{terminalHost}
      </span>
      <span className="text-term-muted"> </span>
      <span className="text-term-path">{terminalPath}</span>
      <span className="text-term-muted">]</span>
      <span className="text-term-prompt">$ </span>
    </span>
  );
}