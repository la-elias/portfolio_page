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
      experiences: [
        {
          company: "Happy Teddies",
          timeframe: "2024 - Present",
          role: "Co-Founder & CTO",
          achievements: [
            <>
              Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
              engagement and 30% faster load times.
            </>,
            <>
              Spearheaded the integration of AI tools into design workflows, enabling designers to
              iterate 50% faster.
            </>,
          ],
          images: [
            // optional: leave the array empty if you don't want to display images
            {
              src: "/images/projects/project-01/cover-01.jpg",
              alt: "Once UI Project",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          company: "Creativ3",
          timeframe: "2018 - 2022",
          role: "Lead Designer",
          achievements: [
            <>
              Developed a design system that unified the brand across multiple platforms, improving
              design consistency by 40%.
            </>,
            <>
              Led a cross-functional team to launch a new product line, contributing to a 15% increase
              in overall company revenue.
            </>,
          ],
          images: [],
        },
      ],
      projects: [
        {
          title: "Happy Teddies",
          description: (
            <>
              A design system that helps you build beautiful websites and applications faster.
            </>
          ),
          link: "https://onceui.com",
          images: [
            {
              src: "/images/projects/project-01/cover-01.jpg",
              alt: "Once UI Project",
              width: 16,
              height: 9,
            },
            {
              src: "/images/projects/project-01/cover-02.jpg",
              alt: "Once UI Project",
              width: 16,
              height: 9,
            }
          ],
        },
        {
          title: "Curie AI",
          description: (
            <>
              The open-source Firebase alternative. Instantly add authentication, a real-time database, and storage to your Next.js app.
            </>
          ),
          link: "https://supabase.io",
          images: [
            {
              src: "/images/projects/project-02/cover-01.jpg",
              alt: "Supabase Project",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: "Cooper",
          description: (
            <>
              A design system that helps you build beautiful websites and applications faster.
            </>
          ),
          link: "https://onceui.com",
          images: [
            {
              src: "/images/projects/project-03/cover-01.jpg",
              alt: "Once UI Project",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: "OCR API",
          description: (
            <>
              A design system that helps you build beautiful websites and applications faster.
            </>
          ),
          link: "https://onceui.com",
          images: [
            {
              src: "/images/projects/project-01/cover-01.jpg",
              alt: "Once UI Project",
              width: 16,
              height: 9,
            },
            {
              src: "/images/projects/project-01/cover-02.jpg",
              alt: "Once UI Project",
              width: 16,
              height: 9,
            }
          ],
        },
        {
          title: "Arty",
          description: (
            <>
              The open-source Firebase alternative. Instantly add authentication, a real-time database, and storage to your Next.js app.
            </>
          ),
          link: "https://supabase.io",
          images: [
            {
              src: "/images/projects/project-02/cover-01.jpg",
              alt: "Supabase Project",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: "Grayola test",
          description: (
            <>
              A design system that helps you build beautiful websites and applications faster.
            </>
          ),
          link: "https://onceui.com",
          images: [
            {
              src: "/images/projects/project-03/cover-01.jpg",
              alt: "Once UI Project",
              width: 16,
              height: 9,
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