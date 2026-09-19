export type TerminalValue =
  | { kind: 'string'; value: string }
  | { kind: 'array'; items: string[] }
  | { kind: 'links'; items: TerminalLink[] };

export interface TerminalLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface TerminalLine {
  command: string;
  output: TerminalValue;
}