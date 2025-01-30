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
    title: "About me",
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
      title: "Work Experience",
      experiences: [
        {
          company: "FLY",
          timeframe: "2022 - Present",
          role: "Senior Design Engineer",
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
    },
    studies: {
      display: true, // set to false to hide this section
      title: "Studies",
      institutions: [
        {
          name: "University of Jakarta",
          description: <>Studied software engineering.</>,
        },
        {
          name: "Build the Future",
          description: <>Studied online marketing and personal branding.</>,
        },
      ],
    },
    technical: {
      display: true, // set to false to hide this section
      title: "Technical skills",
      skills: [
        {
          title: "Figma",
          description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
          // optional: leave the array empty if you don't want to display images
          images: [
            {
              src: "/images/projects/project-01/cover-02.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
            {
              src: "/images/projects/project-01/cover-03.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: "Next.js",
          description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
          // optional: leave the array empty if you don't want to display images
          images: [
            {
              src: "/images/projects/project-01/cover-04.jpg",
              alt: "Project image",
              width: 16,
              height: 9,
            },
          ],
        },
      ],
    },
};

export { person, newsletter, social, about };