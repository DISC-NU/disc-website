import ProjectCard from "@/_components/ui/project-card";
import { projects } from "@/utils/constants";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";

export default function ProjectDescriptions() {
  return (
    <section className="mb-16" id="project-descriptions">
      <HeaderWithHighlight highlight={true} center={false} className="mb-8">
        Client Overviews and Project Descriptions
      </HeaderWithHighlight>

      <p className="text-base text-gray-500 mb-8">
        Note: Specialized Technologies listed are project-specific technologies
        which will be used in addition to DISC&apos;s standard tech stack of
        React/Node/Vercel/Supabase.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
