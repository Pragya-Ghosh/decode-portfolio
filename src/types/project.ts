export type ProjectStatus = 'wip' | 'done';

export interface Project {
  title: string;
  status: ProjectStatus;
  statusLabel: string;
  description: string;
  tags: string[];
  githubUrl: string;
}