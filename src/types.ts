export interface Logo {
  type: "image";
  src: string;
}

export interface Company {
  name: string;
  logo: Logo;
  website: string;
}

export interface Client {
  name: string;
  logo: Logo;
  website: string;
}

// Videos can be a YouTube/Google Drive link or a file in /public (e.g. "/demo.mp4")
export type ProjectMedia =
  | { type: "video"; src: string }
  | { type: "screenshots"; srcs: string[] }
  | { type: "phone"; src: string };

export interface PastProject {
  client: string;
  website?: string;
  description: string;
  media?: ProjectMedia;
}

export interface Role {
  id: string;
  seats: number;
  title: string;
  icon: React.ReactNode;
  timeCommitment?: string[];
  lookingFor: string[];
  responsibilities: string[];
  whyApply: string[];
}

export interface TabRefsType {
  [key: string]: HTMLDivElement | null;
}

export interface TimelineStepProps {
  number: string;
  title: string;
  date: string;
  description: string;
  delay: number;
}

export interface RoleDescriptionCardProps {
  title: string;
  items: string[];
}

export interface RoleDetailsProps {
  role: Role;
}

export interface FAQItemProps {
  question: string;
  answer: string;
  delay: number;
}
