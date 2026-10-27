import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'SENSE (Signal Extraction and Noise Suppression Engine)',
    status: 'wip',
    statusLabel: 'Ongoing',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.',
    tags: ['Python', 'scikit-learn', 'R', 'Jupyter'],
    githubUrl: '#',
  },
  {
    title: 'Genesis',
    status: 'wip',
    statusLabel: 'Ongoing',
    description:
      'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus.',
    tags: ['C++', 'Computer Graphics', 'Machine Learning'],
    githubUrl: '#',
  },
  {
    title: 'NashCart',
    status: 'wip',
    statusLabel: 'Ongoing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.',
    tags: ['Python', 'Pandas', 'React', 'D3.js'],
    githubUrl: '#',
  },
  {
    title: 'Tandem',
    status: 'wip',
    statusLabel: 'Ongoing',
    description:
      'A real-time collaborative code editor built for fast-paced pair programming and code reviews. By combining an optimistic UI on the frontend with a robust Line-Level Concurrency engine (OCC) on the backend, Tandem lets multiple engineers edit the same codebase simultaneously with zero perceived latency.',
    tags: ['Next.js', 'React', 'Node.js', 'WebSockets', 'Express'],
    githubUrl: 'https://github.com/Pragya-Ghosh/tandem',
  },
  {
    title: 'Ping!',
    status: 'done',
    statusLabel: 'Completed',
    description:
      'A lightweight, concurrent command-line chat application built in C from scratch. Ping! is designed for secure, low-latency communication over TCP. It features a custom application-layer protocol that handles user authentication, targeted real-time messaging, room-wide broadcasting, and local file transfers for upto 100 clients simultaneously.',
    tags: ['C', 'Socket Programming', 'TCP/IP'],
    githubUrl: 'https://github.com/Pragya-Ghosh/ping',
  },
  {
    title: 'UrbanAI',
    status: 'done',
    statusLabel: 'Completed',
    description:
      'Satellite-imagery change detection: compare two images of the same location taken at different times and highlight urban development between them.',
    tags: ['PyTorch', 'Computer Vision', 'TCP/IP'],
    githubUrl: 'https://github.com/Pragya-Ghosh/ping',
  },
];