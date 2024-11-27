import ProjectCard from "@/_components/ui/project-card";
import { projects } from "@/utils/constants";
export default function ProjectDescriptions() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">
        <span className="relative">
          <span className="relative z-10">Project Descriptions</span>
          <span
            className="absolute bottom-0 left-0 w-full"
            style={{
              height: "1.4375rem",
              background: "rgba(20, 189, 149, 0.20)",
            }}
          ></span>
        </span>
      </h2>

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
