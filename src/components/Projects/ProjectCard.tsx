import { FaGithub } from 'react-icons/fa6';
import { Project } from '@/types/project';

const badgeStyles = {
  wip: 'bg-badge-wip-bg text-badge-wip-text',
  done: 'bg-badge-done-bg text-badge-done-text',
};

export default function ProjectCard({ project }: { project: Project }) {
  const { title, status, statusLabel, description, tags, githubUrl } = project;

  return (
    <div className="flex flex-col overflow-hidden border-t border-border pt-6 bg-transparent first:border-t-0 first:pt-0 md:flex-row md:rounded-xl md:border md:border-border md:bg-white md:pt-0">
      {/* Hidden on mobile, visible on desktop */}
      <div className="hidden min-h-40 w-full shrink-0 items-center justify-center bg-border text-text-main md:flex md:min-h-55 md:w-50">
        Img Placeholder
      </div>
      
      <div className="flex flex-1 flex-col gap-1.5 p-0 md:p-8">
        
        {/* Title and Badge */}
        <div className="flex flex-col items-start gap-1.5 md:gap-2">
          <h3 className="m-0 text-[clamp(1.25rem,4vw,1.5rem)] font-bold leading-tight text-accent-dark md:text-2xl">{title}</h3>
          <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[status]}`}>
            {statusLabel}
          </span>
        </div>
        
        {/* Description */}
        <p className="m-0 text-sm leading-relaxed text-text-main line-clamp-2 md:line-clamp-none md:text-base md:leading-7">
          {description}
        </p>
        
        {/* Tags - Hidden on mobile, visible on desktop */}
        <div className="mt-1 hidden flex-wrap gap-2 md:flex">
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
          className="mt-auto flex w-fit items-center gap-1.5 pt-1.5 text-sm font-medium text-accent-light transition-colors hover:text-accent-dark md:pt-3 md:text-base"
        >
          <FaGithub className="text-base md:text-[1.1rem]" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}