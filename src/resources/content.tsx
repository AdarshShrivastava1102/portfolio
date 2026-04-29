type ExperienceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type SkillTag = {
  icon: string;
  name: string;
};


const person = {
    firstName: 'Adarsh',
    lastName:  'Shrivastava',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'AI Product Manager',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata',
    languages: ['English', 'Hindi'],
    email: 'x23adarshs@iima.ac.in'
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>Occasional notes on building AI products in industrial contexts.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/adarsh-shrivastava',
        essential: true,
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/adarsh-shrivastava/',
        essential: true,
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:x23adarshs@iima.ac.in',
        essential: true,
    },
]

const home = {
    label: 'Home',
    path:'/',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as an ${person.role}`,
    image: '/images/og/home.jpg',
    headline: <>AI Product Leader shipping GenAI agents for Fortune-500</>,
    subline: <>I'm Adarsh, an AI Product Manager at Cognizant, where I shipped 3 GenAI copilots for Fortune-500 clients. IIM-A '24 · IIT-G '16. Building AI products at the intersection of business and technology.</>
}

const about = {
    label: 'About',
    path: '/about',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from Bengaluru, India`,
    image: '/images/og/about.jpg',
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: ''
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Adarsh is an AI Product Leader based in Bengaluru with 8+ years driving large-scale AI deployments and digital transformation across automotive, manufacturing, and enterprise. He's shipped 3 GenAI copilots in production for Fortune-500 clients, designed an ML model with 92% accuracy at Michelin, and led BS-VI compliance at Volvo Eicher.</>
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
                    <>Built and deployed 3 AI-driven digital assistants — vendor evaluation, dealer onboarding, material coverage — for Fortune-500 clients, cutting manual effort 50%+</>,
                    <>Drove enterprise-scale modernization: migrated 12 legacy applications to AWS and transitioned 250+ apps across 60+ manufacturing sites to RedHat OSV</>,
                    <>Driving 15% YoY growth on a $9M client portfolio; engaging with VPs and CXOs on quarterly progress and new revenue streams</>,
                    <>Led end-to-end product lifecycle of a $30M+ invoice platform — owning BRDs, backlogs, prioritization across a 10-member cross-functional team</>
                ],
                images: [] as ExperienceImage[],
            },
            {
                company: 'Michelin',
                timeframe: 'Sep 2018 – Mar 2023',
                role: 'Assistant Manager II — Product Manager & Digital Transformation',
                achievements: [
                    <>Hand-picked for Digital Transformation Task Force — built internal digital tools (Power BI, design approval workflows, IoT-connected monitoring)</>,
                    <>Designed an ML model with 92% prediction accuracy across 300+ tyre variants — trained on driver behavior, route profile, and load patterns</>,
                    <>Co-developed a proprietary simulation product adopted across Michelin's design team, cutting analysis time 50%</>,
                    <>Represented India in standardization effort in USA, reducing product offerings 40% to streamline global operations</>
                ],
                images: [] as ExperienceImage[],
            },
            {
                company: 'Volvo Eicher Commercial Vehicles',
                timeframe: 'Jun 2016 – Aug 2018',
                role: 'Deputy Manager — Product Owner',
                achievements: [
                    <>Convinced CXO panel to approve BS-VI compliance components worth INR 200k/truck</>,
                    <>Boosted manufacturing productivity 20% resolving production line issues, delivering INR 50 Cr revenue growth</>,
                    <>Reduced field complaints 60% through Root Cause Analysis (RCA), improving customer satisfaction</>
                ],
                images: [] as ExperienceImage[],
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'Indian Institute of Management Ahmedabad (IIM-A)',
                description: <>MBA · 2023–2024 · Placement Committee — placed 14 students at Fortune-500 employers</>,
            },
            {
                name: 'Indian Institute of Technology Guwahati (IIT-G)',
                description: <>MTech in Machine Design · 2014–2016</>,
            },
            {
                name: 'Bhilai Institute of Technology (BIT)',
                description: <>B.E. in Mechanical Engineering · 2010–2014</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Skills & Tools',
        skills: [
            {
                title: 'AI Product Management',
                description: <>Building GenAI agents, RAG systems, evals, and copilots for production use. Hands-on with Anthropic Claude API, LangChain, and prompt engineering.</>,
                images: [] as ExperienceImage[],
                tags: [] as SkillTag[],
            },
            {
                title: 'Digital Transformation',
                description: <>Cloud migration (AWS), workflow automation, IoT deployments, change management at scale across multi-site enterprise environments.</>,
                images: [] as ExperienceImage[],
                tags: [] as SkillTag[],
            },
            {
                title: 'Stakeholder Management',
                description: <>CXO-level engagement across India, USA, and France. Cross-functional team leadership in 10+ member squads using Agile/SAFe.</>,
                images: [] as ExperienceImage[],
                tags: [] as SkillTag[],
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    path: '/blog',
    title: 'Writing on AI products',
    description: `Read what ${person.name} has been thinking about lately`,
    image: '/images/og/blog.jpg'
}

const work = {
    label: 'Work',
    path: '/work',
    title: 'My projects',
    description: `Selected projects and case studies by ${person.name}`,
    image: '/images/og/work.jpg'
}

const gallery = {
    label: 'Gallery',
    path: '/gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    image: '/images/og/gallery.jpg',
    images: [
      {
        src: '/images/avatar.jpg',
        alt: 'Placeholder',
        orientation: 'horizontal'
      }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };