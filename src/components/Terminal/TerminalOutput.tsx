import { TerminalValue } from '@/types/terminal';

export default function TerminalOutput({ output }: { output: TerminalValue }) {
  if (output.kind === 'string') {
    return <span className="block pl-4 text-term-string">{output.value}</span>;
  }

  if (output.kind === 'array') {
    return (
      <span className="block pl-4 text-term-array">
        {output.items.map((item, i) => (
          <span key={item}>
            {item}
            {i < output.items.length - 1 && <span className="text-term-muted">{'  ·  '}</span>}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className="block pl-4">
      {output.items.map((link, i) => (
        <span key={link.href}>
          <a
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            className="text-term-key underline decoration-term-muted underline-offset-4 transition-colors hover:decoration-term-key"
          >
            {link.label}
          </a>
          {i < output.items.length - 1 && <span className="text-term-muted">{'  ·  '}</span>}
        </span>
      ))}
    </span>
  );
}