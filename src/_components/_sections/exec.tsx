import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { teamMembers } from "@/utils/constants";

interface TeamMemberCardProps {
  member: {
    name: string;
    position: string;
    background: string;
    image: string;
    social: {
      linkedin: string;
      instagram: string;
      github: string;
    };
  };
}

export default function MeetTheTeam() {
  const TeamMemberCard = ({ member }: TeamMemberCardProps) => (
    <div className="flex flex-col w-full">
      <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden">
        <Image
          src={member.image}
          alt={`${member.name}'s profile picture`}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
        <p className="font-medium">
          <span className="relative">
            <span className="relative z-10 text-black text-medium">
              {member.position}
            </span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "0.5rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </p>
        <p className="text-gray-500 text-sm">{member.background}</p>

        <div className="flex gap-4 mt-4">
          <a
            href={member.social.linkedin}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={member.social.instagram}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href={member.social.github}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 flex justify-center px-4">
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-center">
          <span className="relative">
            <span className="relative z-10">Meet The Team Behind DISC</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>

        <p className="mt-6 text-gray-500 text-md">
          Meet the passionate individuals driving innovation and social impact
          at DISC. Our executive board brings together diverse perspectives and
          expertise to lead our community forward.
        </p>

        <div className="mt-12">
          {/* Container for all cards */}
          <div className="w-full">
            {/* First row with 4 members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {teamMembers.slice(0, 4).map((member, index) => (
                <div key={index} className="w-full">
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
            {/* Second row with 3 members centered */}
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-3/4">
                {teamMembers.slice(4).map((member, index) => (
                  <div key={index} className="w-full">
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
