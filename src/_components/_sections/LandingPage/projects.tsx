"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";
import Iphone15Pro from "@/_components/ui/iphone-15-pro";
import { pastProjects } from "@/utils/constants";
import { ProjectMedia } from "@/types";

// Turns YouTube / Google Drive share links into embeddable URLs
const getEmbedUrl = (src: string) => {
  const youtube = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([\w-]+)/);
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}`;
  const drive = src.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (drive) return `https://drive.google.com/file/d/${drive[1]}/preview`;
  return null;
};

function Media({ media, client }: { media: ProjectMedia; client: string }) {
  if (media.type === "phone") {
    return (
      <div className="w-[320px] relative">
        <Iphone15Pro
          width={240}
          height={489}
          src={media.src}
          className="w-full relative z-10"
        />
      </div>
    );
  }

  if (media.type === "video") {
    const embedUrl = getEmbedUrl(media.src);
    return (
      <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md bg-black">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={`${client} project demo`}
            className="w-full h-full"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <video
            src={media.src}
            controls
            preload="metadata"
            className="w-full h-full"
          />
        )}
      </div>
    );
  }

  // Two screenshots overlap diagonally in a "bowtie": both share one grid cell,
  // the first (wider) sits top-left in front, the second sits lower-right behind.
  // Hovering either one straightens it and brings it to the front.
  const overlap = media.srcs.length === 2;

  return (
    <div className="grid w-full py-4">
      {media.srcs.map((src, idx) => (
        <a
          key={src}
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className={`block rounded-lg overflow-hidden shadow-md ${
            overlap
              ? `col-start-1 row-start-1 shadow-xl ring-1 ring-black/10 transition-transform duration-300 hover:z-30 hover:rotate-0 hover:scale-105 ${
                  idx === 0
                    ? "z-20 w-[72%] justify-self-start self-start -rotate-3"
                    : "z-10 w-[46%] justify-self-end self-start mt-[18%] rotate-3"
                }`
              : ""
          }`}
        >
          <Image
            src={src}
            alt={`${client} screenshot ${idx + 1}`}
            width={0}
            height={0}
            className="w-full h-auto"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
        </a>
      ))}
    </div>
  );
}

export function ClientProjectsSection() {
  return (
    <div id="projects" className="mt-36">
      <HeaderWithHighlight highlight={true}>
        Previous Client Projects
      </HeaderWithHighlight>

      <p className="text-gray-500 text-md leading-relaxed text-center max-w-3xl mx-auto mt-8 px-2">
        Our project portfolio showcases the diverse range of solutions
        we&apos;ve developed for our community partners.
      </p>

      <div className="flex flex-col gap-24 mt-16">
        {pastProjects.map((project, idx) => (
          <div
            key={project.client}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div
              className={`flex flex-col gap-4 px-2 ${
                idx % 2 === 1 ? "lg:order-2" : ""
              } ${project.media ? "" : "lg:col-span-2 max-w-3xl mx-auto"}`}
            >
              <h3 className="text-2xl font-semibold text-black">
                {project.website ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {project.client}
                  </a>
                ) : (
                  project.client
                )}
              </h3>
              <p className="text-gray-500 text-md leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.media && (
              <motion.div
                className="flex justify-center items-start px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
              >
                <Media media={project.media} client={project.client} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
