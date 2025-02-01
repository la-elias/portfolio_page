import { title } from "process";

const person = {
  firstName: "Luis",
  lastName: "Elias",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Entrepenuer & Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Lima", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: (
      <>
        Subscribe if you want to know what I am up to.
      </>
    ),
};

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/la-elias",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/luiseliasm02",
    },
    {
      name: "X",
      icon: "x",
      link: "https://x.com/luch0247",
    },
    {
      name: "Email",
      icon: "email",
      link: "mailto:luis@happyteddies.com",
    },
];

const about = {
    label: "About",
    title: "luch0247",
    description: `Hey this is ${person.name}, ${person.role} from ${person.location}!`,
    tableOfContent: {
      display: true,
      subItems: false,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: true,
      link: "https://calendly.com/luis-elias/30min",
    },
    intro: {
      display: true,
      title: "Introduction",
      description: (
        <>
          Software Engineer, fast builder, and problem solver. Built my own voice assistant in high school, figuring out coding along the way. 
          Since then, I’ve developed and scaled platforms, worked on hardware, and picked up new skills whenever needed to push projects forward. Move fast, fail cheap, and adapt quickly.
        </>
      ),
    },
    work: {
      display: true, // set to false to hide this section
      title: "What I've built",
      
      projects: [
        {
          title: "Happy Teddies 🧸",
          description: (
            <>
              AI-powered plush toys that let users have real conversations with their favorite characters. 
              Developed both the hardware and software, ensuring seamless voice interaction.
            </>
          ),
          link: "https://happyteddies.com/",
          tiktok: "https://www.tiktok.com/@happy_teddies",
          images: [
            {
              src: "/images/projects/ht-project-1.mp4",
              alt: "Happy Teddies",
            },
            {
              src: "/images/projects/ht-project-2.jpg",
              alt: "Customer HT",
            },
            {
              src: "/images/projects/ht-project-3.jpg",
              alt: "Social Media HT",
            },
            {
              src: "/images/projects/ht-project-4.jpg",
              alt: "HT Process",
            },
          ],
        },
        {
          title: "Curie AI 📚",
          description: (
            <>
              AI math tutor that reach 42K+ users, outperforming general AI models in solving equations and matrices. 
              Engineered domain-specific intelligence for better step-by-step problem solving.
            </>
          ),
          link: "https://www.iacurie.com/",
          tiktok: "https://www.tiktok.com/@curietutor",
          images: [
            {
              src: "https://www.youtube.com/watch?v=xEsoPwalWRs",
              alt: "Curire Comparison",
            },
            {
              src: "/images/projects/curie-project-1.jpg",
              alt: "Testimonials",
            },
            {
              src: "/images/projects/curie-project-2.jpg",
              alt: "Google Badges",
            },
            {
              src: "/images/projects/curie-project-3.jpg",
              alt: "Growth Results",
            },
            {
              src: "/images/projects/curie-project-4.jpg",
              alt: "Landing Page",
            }
          ],
        },
        {
          title: "Cooper.ai 🔍",
          description: (
            <>
              A RAG-based system for document search, enabling instant information retrieval and summarization, with 1.5K users in 2 months.
            </>
          ),
          link: "https://onceui.com",
          images: [
            {
              src: "/images/projects/cooper-project-1.mp4",
              alt: "Demo Video",
            },
            {
              src: "/images/projects/cooper-project-2.jpg",
              alt: "Cooper AI",
            },
          ],
        },
        {
          title: "OCR API 📜",
          description: (
            <>
              Transformed an open-source OCR project into a ready-to-use API endpoint, making text extraction from images faster and more accessible for developers.
            </>
          ),
          link: "https://onceui.com",
          images: [
            {
              src: "/images/projects/ocr-project-2.jpg",
              alt: "Github code",
            },
            {
              src: "/images/projects/ocr-project-1.jpg",
              alt: "Postman",
            },
          ],
        },
        {
          title: "Arty 🎨",
          description: (
            <>
              An image transformation tool that applies stylized effects to photos, inspired by GTA aesthetics, Studio Ghibli, and other artistic styles.
            </>
          ),
          link: "https://supabase.io",
          images: [
            {
              src: "/images/cover.jpg",
              alt: "Supabase Project",
            },
          ],
        },
        {
          title: "Tasker Template 🚀",
          description: (
            <>
              A task management tool where tasks can be assigned, tracked, and marked as completed, with a clean responsive UI/UX for efficient workflow.
            </>
          ),
          link: "https://tasker-template.vercel.app/",
          repo: "https://github.com/la-elias/task-saas-template",
          images: [
            {
              src: "/images/projects/tasker-project-1.jpg",
              alt: "Landing Page",
            },
            {
              src: "/images/projects/tasker-project-2.jpg",
              alt: "Dashboard",
            },
            {
              src: "/images/projects/tasker-project-3.jpg",
              alt: "Task Creation",
            },
            {
              src: "/images/projects/tasker-project-4.jpg",
              alt: "Task Management",
            },
          ],
        },
      ],
    },
    studies: {
      display: true, // set to false to hide this section
      title: "Studies",
      institutions: [
        {
          name: "Universidad del Pacífico",
          description: <>Studied business engineering.</>,
        },
        {
          name: "Exchange program in Switzerland",
          description: <>Accelerate my startup at START Fellowship.</>,
        },
      ],
    },
    technical: {
      display: true, // set to false to hide this section
      title: "Skills & Tools",
      skills: [
        {
          title: "Figma",
          icon: "figma",
        },
        {
          title: "Next.js",
          icon: "nextjs",
        },
        {
          title: "React",
          icon: "react",
        },
        {
          title: "Tailwind CSS",
          icon: "tailwind",
        },
        {
          title: "Supabase",
          icon: "supabase",
        },
        {
          title: "Node.js",
          icon: "node",
        },
        {
          title: "Python",
          icon: "python",
        },
        { 
          title: "Javascript",
          icon: "js",
        },
        {
          title: "HTML",
          icon: "html",
        },
        {
          title: "CSS",
          icon: "css",
        },
        {
          title: "PostgreSQL",
          icon: "postgresql",
        },
        {
          title: "Docker",
          icon: "docker",
        },
        {
          title: "Git",
          icon: "git",
        },
        {
          title: "C++",
          icon: "cplusplus",
        },
        { 
          title: "Express",
          icon: "express",
        },
        {
          title: "Expo",
          icon: "expo",
        }
      ],
    },
};

export { person, newsletter, social, about };