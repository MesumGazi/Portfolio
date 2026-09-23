/**
 * Local placeholder content.
 * Replace every value here with your real details, or serve the same shape
 * from your backend at GET /api/portfolio.
 */
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
        { label: 'Live', url: 'https://example.com' },
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
  links: [
        { label: 'Live', url: 'https://example.com' },
        { label: 'Code', url: 'https://github.com/MesumGazi' },
      ],
},
    
    /*,
    {
      id: 'project-2',
      title: 'Project Two',
      year: '2024',
      description:
        'Placeholder description. Keep it to two lines — the interesting part, not the feature list.',
      tech: ['TypeScript', 'Express', 'Redis'],
      links: [{ label: 'Code', url: 'https://example.com' }],
    },
    {
      id: 'project-3',
      title: 'Project Three',
      year: '2024',
      description:
        'Placeholder description. Mention scale or a constraint if it makes the work sound harder than it was.',
      tech: ['Vite', 'WebSockets'],
      links: [{ label: 'Live', url: 'https://example.com' }],
    },
    */
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Digital Engineer | SDET',
      company: 'Sonata Software',
      location: 'Bangalore, India',
      period: 'Jun 2024 — Present',
      tech: ['Playwright', 'Python', 'Docker', 'CI/CD', 'Xray', 'REST APIs'],
      highlights: [
     'Built test automation from zero for a UK-based client — one of the world\'s largest travel companies. Regression now runs in 50 minutes (was 4 hours); smoke in 10 (was 60).',
     'First on the team to achieve 100% in-sprint automation — QA is no longer the thing releases wait on.',
     'Designed for extension, not rewrites — new scenarios plug into the existing framework, so the suite scales without accumulating maintenance debt.',
],
    },
    {
  id: 'agentic-testgen',
  title: 'agentic-testgen',
  year: '2026 — Planning',
  description:
    'A framework that watches you use a web app and generates Playwright test scaffolding from what it sees — page objects, test data, and a runnable spec. Aiming to cut the boilerplate cost of new automation from a day to minutes.',
  tech: ['Python', 'Playwright', 'LLM APIs'],
  links: [],   // ← no repo yet, so no link
}
    
    /* ,
    {
      id: 'exp-2',
      role: 'Previous Job Title',
      company: 'Previous Company',
      location: 'City, Country',
      period: 'Jun 2022 — Dec 2023',
      highlights: [
        'Placeholder achievement — one line, concrete.',
        'Placeholder achievement — keep it to three bullets max.',
      ],
    },
    */
  ],

  

  // Deliberately no email here — the contact form is the private channel.
  socials: [
    { label: 'GitHub', url: 'https://github.com/MesumGazi' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mesum-gazi-a6b12317b/' },
    { label: 'X', url: 'https://x.com/MesumGazi' },
  ],
}