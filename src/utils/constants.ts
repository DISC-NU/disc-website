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
    name: "Joanna Soltys",
    grade: "Senior",
    background: "Computer Science",
    image: "/joanna.JPEG",
    social: {
      linkedin: "https://www.linkedin.com/in/joanna-soltys/",
      instagram: "https://www.instagram.com/jothesmolbean/",
      github: "https://github.com/jmsoltys",
    },
  },
  {
    position: "Co-President",
    name: "Aanand Patel",
    grade: "Senior",
    background: "Computer Science",
    image: "/annand.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/aanand-patel1/",
      instagram: "https://www.instagram.com/aanandpatel123/",
      github: "https://github.com/aanandp123",
    },
  },
  {
    position: "VP Member Development",
    name: "Paula Fregene",
    grade: "Junior",
    background: "Computer Science",
    image: "/paula.JPG",
    social: {
      linkedin: "https://www.linkedin.com/in/paulafregene/",
      instagram: "https://www.instagram.com/iam_paulaaaa/",
      github: "https://github.com/paulafregene",
    },
  },
  {
    position: "VP Business Development",
    name: "Yong-yu Huang",
    grade: "Junior",
    background: "Computer Science, English",
    image: "yong-yu.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/yong-yuhuang/",
      instagram: "https://www.instagram.com/yongs.h/",
      github: "https://github.com/yongssh",
    },
  },
  {
    position: "VP Finance",
    name: "Ejean Kuo",
    grade: "Junior",
    background: "Computer Science, English",
    image: "/ejean.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/ejeankuo/",
      instagram: "https://www.instagram.com/ejeankuo/",
      github: "https://github.com/JackyZhang1219",
    },
  },
  {
    position: "VP Marketing",
    name: "Jazlyn Ho",
    grade: "Sophomore",
    background: "Computer Science, Viola",
    image: "/jazlyn.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/jazlynh.o/",
      github: "https://github.com/jazlynho2028",
    },
  },
  {
    position: "Technical Lead",
    name: "Vihaan Shah",
    grade: "Senior",
    background: "Computer Science",
    image: "/vihaan.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/shah-vihaan/",
      instagram: "https://www.instagram.com/vihaanshah26/",
      github: "https://github.com/vihaanshah26",
    },
  },
  {
    position: "Technical Lead",
    name: "Brock Brown",
    grade: "Junior",
    background: "Computer Science",
    image: "/brock.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/brock-brown-058216221/",
      instagram: "https://www.instagram.com/bbrockbrown/",
      github: "https://github.com/bbrockbrown",
    },
  },
  {
    position: "Technical Lead",
    name: "Christian Lee",
    grade: "Junior",
    background: "Computer Science",
    image: "/christian.JPG",
    social: {
      linkedin: "https://www.linkedin.com/in/christian-lee-b429032a9/",
      instagram: "https://www.instagram.com/chrinatto/",
      github: "https://github.com/appleseedcarrot",
    },
  },
];

export const projects = [
  {
    title: "Climate Action Evanston - Volunteer Portal",
    mission:
      "Climate Action Evanston accelerates local climate action to meet Evanston's Climate Action and Resilience Plan (CARP) goals through community collaboration.",
    description:
      "Create a website that allows volunteers to log in, view events and volunteer opportunities, and track their attendance and the impact they've made. Their activities will be stored in Action Networks, a database for non-profits that they are using, and sync with the frontend.",
    tech: "Project may utilize the Action Network API.",
    link: "https://www.climateactionevanston.org/",
    image_url:
      "https://ugc.production.linktr.ee/029e07d3-f7f4-4a9b-bebf-dcc084e9f1a7_CAEcirclelogo.png",
  },
  {
    title: "The Recyclery - Website Revamp",
    mission:
      "The Recyclery is a nonprofit bicycle shop that promotes sustainability by encouraging bicycle use through education and access to affordable bikes.",
    description:
      "Replace the current WordPress website with a new website that's more user-friendly. The website should help publicize events/workshops and include blog posts.",
    tech: "Project may utilize Mailchimp and Paypal integrations.",
    link: "https://www.therecyclery.org/",
    image_url:
      "https://www.therecyclery.org/wp-content/uploads/2023/04/webshop_logo.webp",
  },
  {
    title: "Clark Street Bird Sanctuary - Plant Tracking System",
    mission:
      "Clark Street Bird Sanctuary preserves and enhances natural habitats to support bird populations and biodiversity in the Evanston area.",
    description:
      "Create a map-based platform to track progress and location of plants and integrate volunteer work day reports.",
    tech: "Project may utilize a map-based package like ArcGIS Maps SDK.",
    link: "https://clarkstreetbeachbirdsanctuary.org/",
    image_url:
      "https://img1.wsimg.com/isteam/ip/10685ce5-d1b7-4c15-a2a1-5aadcf4ee6ba/logo/9749ee1d-0df6-4395-83bc-dde2c9e32000.JPG/:/rs=w:310,h:310,cg:true,m/cr=w:310,h:310/qt=q:95",
  },
  {
    title: "Sokana Collective - Website Revamp",
    mission:
      "Sokana Collective provides access to culturally competent training, education, and support for doulas and families.",
    description:
      "Replace existing website with a new website from scratch that's more user friendly and easy to navigate. Allow admin accessibility to change the doula list and board of directors on a regular basis. Add an online doula training academy section where people can watch videos for free and register/pay for classes.",
    tech: "Project may utilize video storage and transcoding and Stripe integration.",
    link: "https://www.sokanacollective.com/",
    image_url:
      "https://images.squarespace-cdn.com/content/623f9fd83fd2075fe4f672b0/1654144845808-NO9HONPO1L8VONL34KU5/SC+logo.jpeg?content-type=image%2Fjpeg",
  },
  {
    title: "Sokana Collective - CRM Platform",
    mission:
      "Sokana Collective provides access to culturally competent training, education, and support for doulas and families.",
    description:
      "Replace existing CRM system with a new system that allows patients to have an account to view their balance, update payment information and see information about the doula they are assigned to and doulas can write notes for patients to see.",
    tech: "Project may require additional safeguards to protect electronic protected health information and utilize Quickbooks integration.",
    link: "https://www.sokanacollective.com/",
    image_url:
      "https://images.squarespace-cdn.com/content/623f9fd83fd2075fe4f672b0/1654144845808-NO9HONPO1L8VONL34KU5/SC+logo.jpeg?content-type=image%2Fjpeg",
  },
  {
    title: "North Shore Senior Center - CRM Platform",
    mission:
      "North Shore Senior Center enhances the lives of older adults by providing comprehensive programs and services that promote independence and well-being.",
    description:
      "Replace their existing outdated Access database with a Web-based CRM-like platform that allows admin to input and view client information, participant-based cases, participant activity scores and generate excel-based outcome reports, participant monthly activity reports and invoices.",
    tech: "Project may require additional safeguards to protect electronic protected health information.",
    link: "https://www.nssc.org/",
    image_url:
      "https://www.nssc.org/assets/images/custom/footer_logo_standard.png",
  },
  {
    title: "Institute for Therapy through the Arts - Inventory System",
    mission:
      "Institute for Therapy through the Arts offers creative arts therapies to individuals of all ages to improve mental health and overall quality of life.",
    description:
      "Replace existing Excel workflow with a web-based inventory management system for therapists to check in/check out items and for admins track purchase requests and location data of items (iPads, art supplies, etc.)",
    tech: "N/A",
    link: "https://itachicago.org/blog/",
    image_url:
      "https://itachicago.org/wp-content/uploads/2015/07/ita_logo-e1444063584889.png",
  },
  {
    title: "Avery's Helpful Hair Kit - Scheduling Platform",
    mission:
      "Avery's Helpful Hair Kit provides hair care kits and resources to children in foster care and low-income families.",
    description:
      "Replace manual email coordination with a web-based scheduling solution for interested volunteers to fill out their own availability and then for the organization to select a common date for them to have a hair kit packing session.",
    tech: "N/A",
    link: "https://www.averyshelpfulhairkits.com/",
    image_url:
      "https://static.wixstatic.com/media/2dc9a8_fb75d8f7e9524033b4c1e2862c2f8bf6~mv2.jpg/v1/fill/w_644,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2dc9a8_fb75d8f7e9524033b4c1e2862c2f8bf6~mv2.jpg",
  },
];
