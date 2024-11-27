import Image from "next/image";
import Link from "next/link";
interface ProjectCardProps {
  title: string;
  mission: string;
  description: string;
  tech?: string;
  link: string;
  image_url?: string;
}

export default function ProjectCard({
  title,
  mission,
  description,
  tech,
  link,
  image_url,
}: ProjectCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col space-y-4">
        {image_url && (
          <div className="relative w-full h-40 mb-2">
            <Image
              src={image_url}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <Link
          href={link}
          className="underline text-xl font-semibold text-black"
        >
          {title}
        </Link>
        <div className="space-y-6">
          <div>
            <p className="text-[#40B4B4] font-medium mb-1">Mission</p>
            <p className="text-gray-500 text-base">{mission}</p>
          </div>
          <div>
            <p className="text-[#40B4B4] font-medium mb-1">Project</p>
            <p className="text-gray-500 text-base">{description}</p>
          </div>
          {tech && tech !== "N/A" && (
            <div>
              <p className="text-[#40B4B4] font-medium mb-1">
                Specialized Technologies
              </p>
              <p className="text-gray-500 text-base">{tech}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
