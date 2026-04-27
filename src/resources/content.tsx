import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Adarsh",
  lastName: "Shrivastava",
  name: `Adarsh Shrivastava`,
  role: "AI Product Manager",
  avatar: "/images/avatar.jpg",
  email: "x23adarshs@iima.ac.in",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AdarshShrivastava1102",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/adarsh-p110293/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:x23adarshs@iima.ac.in`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Adarsh Shrivastava's Portfolio`,
  description: `Portfolio website showcasing my work as a AI Product Manager`,
  headline: <>AI Product Leader shipping GenAI Agents</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Adarsh, an AI Product Manager at <InlineCode>Cognizant</InlineCode>, where I shipped 3 GenAI copilots for Fortune-500 clients. Before this — ML at Michelin and BS-VI compliance at Volvo Eicher. IIM-A '24, IIT-G '16.
</>
  ),
};

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: { display: true, subItems: false },
    avatar: { display: true },
    calendar: { display: false, link: '' },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Adarsh is an AI Product Leader based in Bengaluru, with a passion for building AI products that ship at enterprise scale. His work spans GenAI agents, ML systems, and large-scale digital transformation across automotive and manufacturing.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Cognizant',
                timeframe: 'Jun 2024 – Present',
                role: 'Manager Consulting — Digital & AI Products',
                achievements: [
                    <>Built and deployed 3 AI-driven digital assistants for Fortune-500 clients, cutting manual effort 50%+</>,
                    <>Drove $30M+ digital transformation programs across automotive and manufacturing</>,
                    <>Manage $9M client portfolio with 15% YoY growth</>
                ],
                images: []
            },
            {
                company: 'Michelin',
                timeframe: 'Sep 2018 – Mar 2023',
                role: 'Assistant Manager II — Product Manager & DT',
                achievements: [
                    <>Designed ML model with 92% accuracy across 300+ tyre variants</>,
                    <>Hand-picked for Digital Transformation Task Force</>,
                    <>Represented India in standardization effort in USA</>
                ],
                images: []
            },
            {
                company: 'Volvo Eicher',
                timeframe: 'Jun 2016 – Aug 2018',
                role: 'Deputy Manager — Product Owner',
                achievements: [
                    <>Convinced CXO panel to approve BS-VI compliance components worth INR 200k/truck</>,
                    <>Boosted manufacturing productivity 20%, delivering INR 50 Cr revenue growth</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'Indian Institute of Management Ahmedabad',
                description: <>MBA · 2023–2024 · Placement Committee (placed 14 students)</>
            },
            {
                name: 'Indian Institute of Technology Guwahati',
                description: <>MTech · 2014–2016</>
            }
        ]
    },
    technical: {
        display: true,
        title: 'Skills & Tools',
        skills: [
            { title: 'AI Product Management', description: <>Building GenAI agents, RAG systems, evals, and copilots for production use</>, images: [] },
            { title: 'Digital Transformation', description: <>Cloud migration, workflow automation, IoT, change management</>, images: [] },
            { title: 'Stakeholder Management', description: <>CXO engagement across India, USA, France</>, images: [] }
        ]
    }
}
  work: {
    display: false, // set to false to hide this section
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
    display: false, // set to false to hide this section
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
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
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
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
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

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
