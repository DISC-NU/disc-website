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
    website: "https://www.booksbreakfast.org",
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
    website: "https://volunteer.projecthelping.org/agency/detail/?agency_id=155608",
  },
  {
    name: "Urban Tables",
    logo: {
      type: "image",
      src: "/urban-tables.png",
    },
    website: "https://www.urbantableschicago.com",
  },
  {
    name: "World Relief Chicago",
    logo: {
      type: "image",
      src: "/world-relief.png",
    },
    website: "https://worldreliefchicago.org/",
  },
  {
    name: "Sokana Collective",
    logo: {
      type: "image",
      src: "/sokana-collective.png",
    },
    website: "https://www.sokanacollective.com",
  },
  {
    name: "Institute for Therapy through the Arts",
    logo: {
      type: "image",
      src: "/ita.png",
    },
    website: "https://itachicago.org",
  },
  {
    name: "Avery's Helpful Hair Kit",
    logo: {
      type: "image",
      src: "/averys.png",
    },
    website: "https://www.averyshelpfulhairkits.com/",
  },
  {
    name: "North Shore Senior Center",
    logo: {
      type: "image",
      src: "/nssc.jpg",
    },
    website: "https://www.nssc.org/",
  },
  {
    name: "Clark Street Bird Sanctuary",
    logo: {
      type: "image",
      src: "/csbs.jpeg",
    },
    website: "https://clarkstreetbeachbirdsanctuary.org/",
  },
  {
    name: "Climate Action Evanston",
    logo: {
      type: "image",
      src: "/clark.png",
    },
    website: "https://www.climateactionevanston.org/",
  },
  {
    name: "The Recyclery",
    logo: {
      type: "image",
      src: "/recyclery.png",
    },
    website: "https://www.therecyclery.org/",
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
    image: "/paula.jpg",
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
    image: "/yong-yu.JPEG",
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
      github: "https://github.com/ejeankuo",
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
    title: "Trash People - Community Volunteer Opportunity App",
    mission:
      "Trash People organizes community clean-up events and promotes environmental stewardship through volunteer engagement in Evanston.",
    description:
      "Create a web application to centralize volunteer opportunities year-round and during special events like volunteer fairs. \
      For events, the app features an interactive map or grid of booths, searchable organization directory, and bookmarking capabilities. \
      The platform maintains a general database of volunteer opportunities throughout the year for the broader Evanston community.",
    tech: "N/A",
    link: "https://www.trashpeople.org",
    image_url:
      "../trashpeople.png",
  },
  {
    title: "Reparations Stakeholders Authority of Evanston - Community Crowdsourcing Platform",
    mission:
      "Reparations Stakeholders Authority of Evanston works towards driving transformative change through community engagement, funding initiatives, and support programs aimed at reinforcing Evanston's local reparations efforts",
    description:
      "Create a full-stack web application that allows Evanston residents to submit ideas and proposals \
      for reparations initiatives. Users can tag submissions with pre-set categories (e.g., Housing, Museum, Education). \
      The platform includes an admin dashboard that displays trending categories, total submissions, filters, \
      and sentiment analysis with high-level keywords. Optional login functionality for RSAE staff to manage and \
      review community ideas.",
    tech: "N/A",
    link: "https://rsaevanston.org/",
    image_url:
      "../rsae_logo.png",
  },
  {
    title: "Reparations Stakeholders Authority of Evanston - Funds and Donation Dashboard",
    mission:
      "Reparations Stakeholders Authority of Evanston works towards driving transformative change through community engagement, funding initiatives, and support programs aimed at reinforcing Evanston's local reparations efforts",
    description:
      "Replace manual spreadsheet tracking with an internal donation tracking system where staff can add and \
      edit donation entries (source, amount, earmarking, date). The platform features dynamic visualizations \
      including total funds, breakdown by category, and month-to-month changes. Staff can export datasets as CSV \
      for reporting purposes.",
    tech: "N/A",
    link: "https://rsaevanston.org/",
    image_url:
      "../rsae_logo.png",
  },
  {
    title: "C&W Market Foundation - Donor Management System",
    mission:
      "To enrich the Evanston community by providing essential grocery access to those facing food insecurity and fostering career skills in the food and culinary industry.",
    description:
      "Replace scattered spreadsheets and manual donor tracking with a centralized donor management platform. \
      The system includes a donor database with CRUD operations, a donation dashboard with charts showing total \
      donations, monthly trends, and top donors, plus easy access to tax paperwork and receipts. The platform \
      supports importing CSV files from Stripe, Square, and Boomerang.",
    tech: "N/A",
    link: "https://www.cwmarketfoundation.org/",
    image_url:
      "../c&w.png",
  },
  {
    title: "C&W Market Foundation - Volunteer Scheduling Portal",
    mission:
      "To enrich the Evanston community by providing essential grocery access to those facing food insecurity and fostering career skills in the food and culinary industry.",
    description:
      "Replace manual email coordination with a web-based volunteer management system. Volunteers can create accounts, \
      view available shifts, and sign up on a first-come, first-served basis with automatic hours tracking. Admins can \
      send announcements that trigger automatic email notifications. The platform includes a calendar view of shifts, a \
      volunteer dashboard showing total hours and upcoming shifts, and automated confirmation and reminder emails.",
    tech: "N/A",
    link: "https://www.cwmarketfoundation.org/",
    image_url:
      "../c&w.png",
  },
  {
    title: "Juleya Woodson - Youth and Community Learner Progress Tracker App",
    mission:
      "To support youth, adult learners, and community members by providing a centralized platform that tracks progress, strengthens program outcomes, and streamlines communication across education and workforce initiatives.",
    description:
      "Build a full-stack application that replaces scattered spreadsheets and multiple tools with a unified system for \
      application intake, data tracking, and participant progress monitoring. Features include a customizable intake form \
      that feeds directly into a secure database, editable fields for demographics and follow-ups, and a snapshot dashboard \
      that highlights key metrics. The system is designed for youth programs, community organizations, and workforce development initiatives. ",
    tech: "N/A",
    link: "https://www.facebook.com/Ihopetheyunderstand/",
    image_url:
      "../juleyawoodson.jpg",
  },
  {
    title: "DISC - Client Outreach App",
    mission:
      "DISC is a student-run organization at Northwestern University that partners with local nonprofits and small businesses to deliver technology solutions and creative projects that drive social impact.",
    description:
      "Develop a comprehensive client relationship management platform to streamline DISC's project intake and communication \
      workflows. The application will feature a public-facing proposal submission form for prospective clients and an internal \
      admin dashboard for managing the full client lifecycle. Key functionality includes client profile management with \
      customizable notes and tags, automated email campaigns for outreach and updates, deadline tracking and reminders, \
      and integration capabilities with discnu.org. The system will organize historical client data by academic year, \
      facilitate acceptance/rejection workflows, and tag projects requiring third-party integrations (Stripe, QuickBooks, etc.), \
      enabling DISC to scale their operations while maintaining personalized client relationships.",
    tech: "N/A",
    link: "https://www.discnu.org/",
    image_url:
      "../disc_logo.png",
  },
  {
    title: "DISC - Catering Community",
    mission:
      "DISC is a student-run organization at Northwestern University that partners with local nonprofits and small businesses to deliver technology solutions and creative projects that drive social impact.",
    description:
      "Create a centralized catering database to help Northwestern student organizations make informed decisions about event \
      catering. The platform will allow clubs to create accounts, browse restaurant options, and access comprehensive catering \
      histories including itemized pricing, total costs, photos, and peer ratings. Restaurant profiles will integrate with \
      Google Maps API to display location data and menus. The system will aggregate reviews from past events, enabling clubs \
      to quickly compare options and budget accurately based on real experiences from the Northwestern community.",
    tech: "N/A",
    link: "https://www.discnu.org/",
    image_url:
      "../disc_logo.png",
  },
];
