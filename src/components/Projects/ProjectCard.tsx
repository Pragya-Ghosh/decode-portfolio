import { FaGithub } from 'react-icons/fa6';
import { Project } from '@/types/project';

const badgeStyles = {
  wip: 'bg-badge-wip-bg text-badge-wip-text',
  done: 'bg-badge-done-bg text-badge-done-text',
};

export default function ProjectCard({ project }: { project: Project }) {
  const { title, status, statusLabel, description, tags, githubUrl } = project;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-white md:flex-row">
      <div className="flex min-h-40 w-full shrink-0 items-center justify-center bg-border text-text-main md:min-h-55 md:w-50">
        Img Placeholder
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5 md:p-8">
        
        {/* Title and Badge */}
        <div className="flex flex-col items-start gap-2">
          {/* Scaled back: text-xl on mobile, text-2xl on desktop */}
          <h3 className="m-0 text-xl font-bold text-accent-dark md:text-2xl">{title}</h3>
          <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[status]}`}>
            {statusLabel}
          </span>
        </div>
        
        {/* Description */}
        {/* Scaled back: text-sm on mobile, text-base on desktop */}
        <p className="m-0 text-sm leading-relaxed text-text-main md:text-base md:leading-7">
          {description}
        </p>
        
        {/* Tags */}
        <div className="mt-1 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border px-3 py-1 font-mono text-xs text-text-main md:text-[0.85rem]"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* GitHub Link */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto flex w-fit items-center gap-1.5 pt-3 text-sm font-medium text-accent-light transition-colors hover:text-accent-dark md:text-base"
        >
          <FaGithub className="text-base md:text-[1.1rem]" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}