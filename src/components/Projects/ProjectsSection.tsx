import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import SectionTitle from '@/components/Section/SectionTitle';

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto mt-16 mb-12.5 w-full max-w-6xl px-6 sm:px-8 md:mt-20 md:px-section-x">
      <SectionTitle variant="default" as="h2">
        <span className="mr-4 shrink-0 font-normal text-accent-light md:mr-6">&gt;</span>
        Projects
      </SectionTitle>

      {/* mobile gap-8 for distinct spacing, gap-6 on desktop */}
      <div className="flex flex-col gap-8 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}