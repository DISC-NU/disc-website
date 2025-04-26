import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { teamMembers } from "@/utils/constants";
import { memo, useMemo } from "react";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";

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

const SocialLinks = memo(
  ({ social }: { social: TeamMemberCardProps["member"]["social"] }) => (
    <div className="flex gap-4 mt-4">
      <a
        href={social.linkedin}
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        <Linkedin size={20} />
      </a>
      <a
        href={social.instagram}
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        <Instagram size={20} />
      </a>
      <a
        href={social.github}
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        <Github size={20} />
      </a>
    </div>
  )
);

SocialLinks.displayName = "SocialLinks";
const TeamMemberCard = memo(({ member }: TeamMemberCardProps) => {
  const imagePath = useMemo(
    () => (process.env.NODE_ENV === "production" ? member.image : member.image),
    [member.image]
  );

  return (
    <div id="team" className="flex flex-col w-full">
      <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden">
        <Image
          src={imagePath}
          alt={`${member.name}'s profile picture`}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300"
          loading="lazy"
          quality={75}
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
        <SocialLinks social={member.social} />
      </div>
    </div>
  );
});

TeamMemberCard.displayName = "TeamMemberCard";

const TopTeamGrid = memo(() => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
    {teamMembers.slice(0, 5).map((member, index) => (
      <div key={`top-${member.name}-${index}`} className="w-full">
        <TeamMemberCard member={member} />
      </div>
    ))}
  </div>
));

TopTeamGrid.displayName = "TopTeamGrid";

const BottomTeamGrid = memo(() => (
  <div className="flex justify-center w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full lg:w-3/4">
      {teamMembers.slice(5).map((member, index) => (
        <div key={`bottom-${member.name}-${index}`} className="w-full">
          <TeamMemberCard member={member} />
        </div>
      ))}
    </div>
  </div>
));

BottomTeamGrid.displayName = "BottomTeamGrid";

export default function MeetTheTeam() {
  return (
    <section className="py-12 flex justify-center px-4">
      <div className="w-full max-w-5xl">
        <HeaderWithHighlight highlight={true}>
          Meet the Team
        </HeaderWithHighlight>

        <p className="mt-6 text-gray-500 text-md">
          Meet the passionate individuals driving innovation and social impact
          at DISC. Our executive board brings together diverse perspectives and
          expertise to lead our community forward.
        </p>

        <div className="mt-12">
          <div className="w-full">
            <TopTeamGrid />
            <BottomTeamGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
