import { Instagram, Linkedin, Mail, Github } from "lucide-react";
import { Company, Client } from "@/types";
export const footerSections = [
  {
    title: "About",
    links: [
      {
        text: "About Us",
        href: "#about",
      },
      {
        text: "Executive Board",
        href: "#team",
      },
    ],
  },
  {
    title: "Programs",
    links: [
      {
        text: "Projects",
        href: "/#projects",
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
        text: "Get Involved",
        href: "#about",
      },
    ],
  },
];

export const socialMediaLinks = [
  {
    icon: Instagram,
    link: "https://www.instagram.com/disc_nu/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/company/northwestern-develop-innovation-for-social-change-disc/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    link: "mailto:disc@u.northwestern.edu",
    label: "Email",
  },
  {
    icon: Github,
    link: "https://github.com/DISC-NU",
    label: "Github",
  },
];

export const clients: Client[] = [
  {
    name: "Books and Breakfast",
    logo: {
      type: "image",
      src: "/books_and_breakfast_logo.png",
    },
    website: "https://booksandbreakfast.org/",
  },
  {
    name: "Chicago Furniture Bank",
    logo: {
      type: "image",
      src: "/cfb.jpg",
    },
    website: "https://chicagofurniturebank.org/",
  },
  {
    name: "Good news Partners",
    logo: {
      type: "image",
      src: "/good-news-partners.png",
    },
    website: "https://www.goodnewspartners.org/",
  },
  {
    name: "Kids in Danger",
    logo: {
      type: "image",
      src: "/kid-logo-header.png",
    },
    website: "https://www.kidsindanger.org/",
  },
  {
    name: "Urban Tables",
    logo: {
      type: "image",
      src: "/urban-tables.png",
    },
    website: "https://www.urbantables.org/",
  },
  {
    name: "World Relief Chicago",
    logo: {
      type: "image",
      src: "/world-relief.png",
    },
    website: "https://worldreliefchicago.org/",
  },
];

export const companies: Company[] = [
  {
    name: "Salesforce",
    logo: {
      type: "image",
      src: "/salesforce.png",
    },
    website: "https://www.salesforce.com/",
  },
  {
    name: "Group one Trading",
    logo: {
      type: "image",
      src: "/group_one.jpeg",
    },
    website: "https://www.group1.com/",
  },
  {
    name: "Citadel",
    logo: {
      type: "image",
      src: "/citadel.png",
    },
    website: "https://www.citadel.com/",
  },
  {
    name: "Amazon",
    logo: {
      type: "image",
      src: "/amazon.png",
    },
    website: "https://www.amazon.com/",
  },
  {
    name: "Google",
    logo: {
      type: "image",
      src: "/google.png",
    },
    website: "https://www.google.com/",
  },
  {
    name: "Microsoft",
    logo: {
      type: "image",
      src: "/microsoft.png",
    },
    website: "https://www.microsoft.com/",
  },
  {
    name: "Roblox",
    logo: {
      type: "image",
      src: "/roblox.png",
    },
    website: "https://www.roblox.com/",
  },
  {
    name: "Splunk",
    logo: {
      type: "image",
      src: "/splunk.png",
    },
    website: "https://www.splunk.com/",
  },
  {
    name: "rubrik",
    logo: {
      type: "image",
      src: "/rubrik.png",
    },
    website: "https://www.rubrik.com/",
  },
  {
    name: "Boston Consulting Group",
    logo: {
      type: "image",
      src: "/bcg.png",
    },
    website: "https://www.bcg.com/",
  },
  {
    name: "Capital One",
    logo: {
      type: "image",
      src: "/capital_one.png",
    },
    website: "https://www.capitalone.com/",
  },
  {
    name: "OmniSOC",
    logo: {
      type: "image",
      src: "/omni.png",
    },
    website: "https://www.omnisoc.com/",
  },
  {
    name: "Uline",
    logo: {
      type: "image",
      src: "/uline.png",
    },
    website: "https://www.uline.com/",
  },
  {
    name: "Epsilon3",
    logo: {
      type: "image",
      src: "/ep3.png",
    },
    website: "https://www.epsilon3.io/",
  },
];

export const teamMembers = [
  {
    position: "Co-President",
    name: "Rachel Yao",
    grade: "Senior",
    background: "Computer Science",
    image: "/rachel.JPG",
    social: {
      linkedin: "https://www.linkedin.com/in/rachellyao/",
      instagram: "https://www.instagram.com/rachellyao/",
      github: "https://github.com/rachelya0",
    },
  },
  {
    position: "Co-President",
    name: "Blake Hu",
    grade: "Junior",
    background: "Computer Science",
    image: "/blake.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/blakehy/",
      instagram: "https://www.instagram.com/blakey.hu/",
      github: "https://github.com/blake-hu",
    },
  },
  {
    position: "VP Member Development",
    name: "Joanna Soltys",
    grade: "Junior",
    background: "Computer Science",
    image: "/joanna.JPEG",
    social: {
      linkedin: "https://www.linkedin.com/in/joanna-soltys/",
      instagram: "https://www.instagram.com/jothesmolbean/",
      github: "https://github.com/jmsoltys",
    },
  },
  {
    position: "VP Business Development",
    name: "Jacky Zhang",
    grade: "Senior",
    background: "Computer Science, Economics",
    image: "/jacky.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/jackyz21/",
      instagram: "https://www.instagram.com/jackyzhang1219/",
      github: "https://github.com/JackyZhang1219",
    },
  },
  {
    position: "Technical Lead",
    name: "Amy Liao",
    grade: "Senior",
    background: "Computer Science",
    image: "/amy.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/amyzliao/",
      instagram: "https://www.instagram.com/ammmy_liao/",
      github: "https://github.com/amyzliao",
    },
  },
  {
    position: "Technical Lead",
    name: "Ethan Pineda",
    grade: "Senior",
    background: "Computer Science, Latinx Studies",
    image: "/ethan.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/ethanpineda/",
      instagram: "https://www.instagram.com/ethanpinedaa/",
      github: "https://github.com/ethanpaneraa",
    },
  },
  {
    position: "Technical Lead",
    name: "Annand Patel",
    grade: "Junior",
    background: "Computer Science",
    image: "/annand.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/aanand-patel1/",
      instagram: "https://www.instagram.com/aanandpatel123/",
      github: "https://github.com/aanandp123",
    },
  },
];
