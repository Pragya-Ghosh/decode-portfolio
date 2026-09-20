import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import SectionTitle from '@/components/Section/SectionTitle';

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto mt-20 mb-12.5 w-full max-w-6xl px-section-x">
      {/* Reusing your consistent styling */}
      <SectionTitle variant="default" as="h2">
        <span className="mr-6 shrink-0 font-normal text-accent-light">&gt;</span>
        Projects
      </SectionTitle>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}