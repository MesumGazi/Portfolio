/** Local portfolio content rendered by the frontend. */
export const fallbackPortfolio = {
  profile: {
    name: 'Mesum Gazi',
    role: 'Software Development Engineer in Test',
    location: 'Kashmir,India',
    tagline:
      'I build software and the frameworks that keep it working.',
    about:
      "I'm 25, and I've spent the last two and a half years building test automation frameworks  the kind that quietly catch bugs before anyone notices, so the team ships faster and I look like I knew what I was doing. If I'm honest, it also makes me look a little cooler than I actually am.",
    photoUrl: '/main-image.jpg', // e.g. '/me.jpg' or a CDN URL
    alternatePhotoUrl: '/mesum-gazi-alt-portrait.png',
    resumeUrl: '/Gazi___SDET_RESUME.pdf', // e.g. '/resume.pdf'
    lastUpdated: 'September 2026',   // ← add this line

  },

  projects: [
    {
      id: 'project-1',
      title: 'Api-Engine',
      year: '2026 - building now',
       description: 'A system that runs chaos against public APIs on a schedule — injecting failures, tracking how they degrade, and alerting before users notice. Built with Python, asyncio, and Pydantic.',
  focus: 'Currently: pytest coverage, GitHub Actions, and persisting run history to SQLite.',
  tech: ['Python', 'asyncio', 'Pydantic', 'REST APIs', 'Chaos Engineering'],

      links: [
        { label: 'Code', url: 'https://github.com/MesumGazi/Distributed-API-Chaos-Testing-Monitoring-Platform.git' },
      ],
    },
    {
  id: 'project-2',
  title: 'Agentic-UI-Testgen',
  year: '2026 — Planning',
  description:
    'A framework that watches you use a web app and generates Playwright test scaffolding from what it sees  page objects, test data, and a runnable spec. Aiming to cut the boilerplate cost of new automation from a day to minutes.',
  tech: ['Python', 'Playwright', 'LLM APIs'],
  links: [{ label: 'GitHub', url: 'https://github.com/MesumGazi' }],
},
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Digital Engineer | SDET',
      company: 'Sonata Software',
      location: 'Bangalore, India',
      period: 'Jun 2024 — Present',
      tech: [
        'Playwright',
        'Python',
        'AWS Bedrock',
        'AWS Lambda',
        'PostgreSQL',
        'GitLab CI/CD',
        'Docker',
        'Xray',
      ],
      highlights: [
        'Built a modular API/UI automation framework from scratch with CLI-driven configuration.',
        'Created a Playwright Codegen and AWS Bedrock tool that turns recorded flows into runnable, page-object-based Python tests.',
        'As sole SDET for an enterprise AI support product, tested AWS Lambda contracts, errors, payload integrity, and multilingual AI endpoints.',
        'Added semantic checks for LLM outputs and SQL/PostgreSQL data validation.',
        'Automated suites with GitLab CI, deployment triggers, and Teams alerts. Regression fell from 4 hours to 50 minutes; smoke from 60 minutes to 10; in-sprint automation reached 100%.',
      ],
    },
  ],

  

  // Public contact links.
  socials: [
    { label: 'Email', url: 'mailto:gazimesum@gmail.com' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mesum-gazi-a6b12317b/' },
    { label: 'GitHub', url: 'https://github.com/MesumGazi' },
    { label: 'X', url: 'https://x.com/MesumGazi' },
  ],
}