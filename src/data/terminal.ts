import { TerminalLine } from '@/types/terminal';

export const terminalUser = 'pragya';
export const terminalHost = 'miku';
export const terminalPath = '~';
export const terminalTitle = 'pragya@miku:~';

export const terminalLines: TerminalLine[] = [
  {
    command: 'whereami',
    output: { kind: 'string', value: 'Bhubaneswar, India' },
  },
  {
    command: 'cat contact.txt',
    output: {
      kind: 'links',
      items: [
        { label: 'pragyarashmighosh@gmail.com', href: 'mailto:pragyarashmighosh@gmail.com' },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/pragyaghosh-decode/',
          external: true,
        },
        { label: 'GitHub', href: 'https://github.com/Pragya-Ghosh', external: true },
      ],
    },
  },
  {
    command: 'ls resume/',
    output: {
      kind: 'links',
      items: [
        { label: 'pragya-ghosh.pdf', href: '/Pragya_Ghosh_Resume.pdf', external: true },
      ],
    },
  },
  {
    command: 'cat interests.json',
    output: { kind: 'array', items: ['machine learning', 'data science', 'computer graphics', 'computer vision'] },
  },
  {
    command: 'cat education.txt',
    output: {
      kind: 'string',
      value: 'B.Tech Computer Science Engineering — KIIT, BBSR',
    },
  },
  {
    command: 'cat languages.json',
    output: {
      kind: 'array',
      items: ['Python', 'Java', 'R', 'C/C++', 'SQL', 'JavaScript'],
    },
  },
];