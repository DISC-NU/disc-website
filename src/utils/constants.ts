import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";

export const footerSections = [
  {
    title: "About",
    links: [
      {
        text: "About Us",
        href: "/about",
      },
      {
        text: "Executive Board",
        href: "/board",
      },
      {
        text: "Constitution",
        href: "/constitution",
      },
      {
        text: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Programs",
    links: [
      {
        text: "Events",
        href: "/events",
      },
      {
        text: "Workshops",
        href: "/workshops",
      },
      {
        text: "Mentorship",
        href: "/mentorship",
      },
      {
        text: "Projects",
        href: "/projects",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        text: "Newsletter",
        href: "/newsletter",
      },
      {
        text: "Blog",
        href: "/blog",
      },
      {
        text: "Career Resources",
        href: "/careers",
      },
      {
        text: "Get Involved",
        href: "/get-involved",
      },
    ],
  },
];

export const socialMediaLinks = [
  {
    icon: Instagram,
    link: "https://instagram.com/disc_university",
    label: "Instagram",
  },
  {
    icon: Facebook,
    link: "https://facebook.com/discuniversity",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    link: "https://linkedin.com/company/disc-university",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    link: "mailto:disc@university.edu",
    label: "Email",
  },
  {
    icon: Youtube,
    link: "https://youtube.com/@disc_university",
    label: "YouTube",
  },
];
