export interface ToolRing {
  name: string
  short: string
  level: number
  category: string
}

export interface WhyMePillar {
  title: string
  headline: string
  description: string
}

export interface ProjectItem {
  id: string
  title: string
  date: string
  industry: string
  tagline: string
  summary: string
  highlights: string[]
  tech: string[]
  accentColor: string
  palette: [string, string, string]
  metrics: { label: string; value: string }[]
  link: string
  linkLabel: string
  image?: string
}

export interface OpenSourceItem {
  repo: string
  stars: string
  role: string
  date: string
  summary: string
  tech: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  location: string
  period: string
  detail?: string
}

export interface CertificateItem {
  title: string
  issuer: string
  date: string
}

export const profile = {
  name: 'Parmeet Kaur',
  monogram: 'PARMEET KAUR',
  roleLine: 'Full-Stack Developer | AI & Computer Vision | Systems',
  year: '2026',
  bio: [
    'A software developer focused on building reliable full-stack platforms, real-time computer vision pipelines, and systems-level developer tools.',
    'From shipping role-based enterprise web applications and open-source production fixes in 21.8K+ star repositories to engineering dependency-free OS concurrency debuggers, every system is built with clarity, precision, and measurable impact.',
  ],
  skillsFooterNote:
    'Core CS foundations in Data Structures, Algorithms, Operating Systems, Computer Networks, DBMS, and OOP — paired with modern cloud & CI/CD workflows.',
}

export const coreTools: ToolRing[] = [
  { name: 'React / Next.js', short: 'Rx', level: 92, category: 'Frontend' },
  { name: 'Node / Express', short: 'Nd', level: 90, category: 'Backend' },
  { name: 'Python / OpenCV', short: 'Py', level: 94, category: 'AI & Systems' },
  { name: 'TypeScript', short: 'TS', level: 88, category: 'Language' },
  { name: 'MongoDB / SQL', short: 'DB', level: 86, category: 'Databases' },
  { name: 'Docker / Git', short: 'Dk', level: 84, category: 'DevOps' },
]

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'C', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frameworks & Libraries',
    items: [
      'Node.js',
      'Express.js',
      'React',
      'Next.js',
      'Flask',
      'Tailwind CSS',
      'Socket.IO',
      'Mongoose',
      'OpenCV',
      'NumPy',
      'MediaPipe',
      'SciPy',
    ],
  },
  {
    label: 'Databases & Cloud',
    items: [
      'MongoDB',
      'PostgreSQL',
      'SQLite',
      'Redis',
      'Docker',
      'Linux',
      'CI/CD',
      'Render',
      'Google Cloud OAuth',
      'Postman',
    ],
  },
  {
    label: 'Concepts & Core CS',
    items: [
      'RESTful APIs',
      'JWT & RBAC',
      'Computer Vision',
      'Data Structures & Algorithms',
      'Operating Systems',
      'DBMS',
      'Computer Networks',
    ],
  },
]

export const whyMePillars: WhyMePillar[] = [
  {
    title: 'Open-Source & Production Impact',
    headline: 'Merged PRs in 21.8K+ stars and 650+ stars repositories',
    description:
      'Contributed production authentication fixes with centralized secret resolution and Vitest coverage to OpenStock, resolved cross-platform keyboard shortcut rendering in CARE – Open Healthcare Network, and drove cybersecurity outreach with WNS Cares Foundation.',
  },
  {
    title: 'Full-Stack, AI & Systems Depth',
    headline: 'End-to-end engineering from OS kernels to React UIs',
    description:
      'I build across layers — architecting RBAC-enforced Node.js/MongoDB platforms, optimizing real-time OpenCV & MediaPipe landmark tracking (~92% accuracy), and writing dependency-free Python IPC deadlock & race-condition analysers.',
  },
  {
    title: 'Hackathon-Tested Execution',
    headline: 'Smart India Hackathon Internal Winner (1000+ teams)',
    description:
      'Selected among the top 50 shortlisted teams out of 1000+ entries with a 6-member squad, delivering a working software solution under tight hackathon deadlines with clean architecture and teamwork.',
  },
]

export const openSourceContributions: OpenSourceItem[] = [
  {
    repo: 'OpenStock',
    stars: '21.8K+ GitHub Stars',
    role: 'Contributor · Merged PR',
    date: 'Nov 2026',
    summary:
      'Fixed production auth via centralized secret resolution with AUTH_SECRET fallback; added 5 Vitest unit tests.',
    tech: ['TypeScript', 'Better Auth', 'MongoDB', 'Vitest', 'Node.js'],
  },
  {
    repo: 'CARE – Open Healthcare Network',
    stars: '650+ GitHub Stars',
    role: 'Contributor · Merged PR',
    date: 'Nov 2026',
    summary:
      'Fixed arrow-key symbol rendering in keyboard shortcuts across Apple and non-Apple platforms.',
    tech: ['TypeScript', 'React', 'JavaScript', 'Git', 'GitHub'],
  },
  {
    repo: 'WNS Cares Foundation',
    stars: 'CyberSmart Initiative',
    role: 'Community Volunteer',
    date: 'Jul 2025',
    summary:
      'Volunteered under the CyberSmart Awareness initiative, driving cybersecurity awareness campaigns through community outreach.',
    tech: ['Cybersecurity', 'Community Outreach', 'Public Speaking'],
  },
]

export const projects: ProjectItem[] = [
  {
    id: 'site-audit',
    title: 'Site Audit',
    date: 'April 2026',
    industry: 'Construction QA & SaaS',
    tagline: 'Role-Based Quality Assurance & Inspection Platform',
    summary:
      'Architected and deployed a full-stack construction QA platform with RESTful APIs for real-time site audit tracking, defect logging, and automated report generation across contractor, inspector, and admin roles.',
    highlights: [
      'Built JWT authentication with Role-Based Access Control (RBAC) enforcing granular permissions for three user types.',
      'Designed a dynamic inspection checklist with a stateful workflow engine (open, in-review, resolved), cutting manual tracking overhead and speeding up audit turnaround.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    accentColor: '#1f4e3d',
    palette: ['#1f4e3d', '#b87d3b', '#111111'],
    metrics: [
      { label: 'Access Control', value: '3-Role RBAC' },
      { label: 'Workflow States', value: 'Open → Resolved' },
      { label: 'Reporting', value: 'Automated PDF/QA' },
    ],
    link: 'https://siteaudit-nevr.onrender.com/',
    linkLabel: 'Live Demo',
    image: '/siteaudit-ui.jpg',
  },
  {
    id: 'eyeq-ai',
    title: 'EyeQ AI',
    date: 'May 2026',
    industry: 'Computer Vision & Safety AI',
    tagline: 'Real-Time Drowsiness & Attention Detection Pipeline',
    summary:
      'Built a real-time drowsiness and attention detection system with OpenCV and MediaPipe, paired with a full-stack Flask + SQLite analytics dashboard for live monitoring.',
    highlights: [
      'Achieved ~92% detection accuracy across varying lighting and head-pose conditions.',
      'Optimized facial landmark tracking, reducing missed drowsiness events by 30% over baseline frame-check methods.',
    ],
    tech: ['Python', 'OpenCV', 'NumPy', 'MediaPipe', 'SciPy', 'Flask', 'SQLite'],
    accentColor: '#9b3d26',
    palette: ['#9b3d26', '#d48b3b', '#141414'],
    metrics: [
      { label: 'Accuracy', value: '~92%' },
      { label: 'Missed Events', value: '-30% Reduction' },
      { label: 'Pipeline', value: 'Flask + SQLite' },
    ],
    link: 'https://github.com/parmeetkxur/EyeQAI',
    linkLabel: 'View on GitHub',
  },
  {
    id: 'ipc-trace',
    title: 'IPC-Trace',
    date: 'April 2026',
    industry: 'Systems & Developer Tooling',
    tagline: 'Inter-Process Communication Analyser & Concurrency CLI',
    summary:
      'Engineered a dependency-free Python CLI developer tool that simulates and debugs core IPC mechanisms (pipes, message queues, shared memory) across concurrent processes with a live-refreshing analytics dashboard.',
    highlights: [
      'Designed a multi-pass analysis engine to detect deadlocks, race conditions, and bottlenecks using locks and semaphores.',
      'Applied OS concurrency concepts (critical sections, producer-consumer, reader-writer) in clean, dependency-free Python.',
    ],
    tech: ['Python', 'CLI', 'Operating Systems', 'Concurrency', 'Debugging'],
    accentColor: '#2c3e55',
    palette: ['#2c3e55', '#d9532f', '#0f0f0f'],
    metrics: [
      { label: 'IPC Modes', value: 'Pipes / MQ / SHM' },
      { label: 'Analysis', value: 'Multi-Pass Engine' },
      { label: 'Dependencies', value: 'Zero External' },
    ],
    link: 'https://github.com/parmeetkxur/IPCTrace',
    linkLabel: 'View on GitHub',
  },
]

export const education: EducationItem[] = [
  {
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    location: 'Punjab, India',
    period: '2024 – 2028',
  },
  {
    institution: 'Baring School',
    degree: 'Class XII — Senior Secondary',
    location: 'Batala, Punjab',
    period: 'April 2023 – April 2024',
    detail: '90%',
  },
  {
    institution: 'Baring School',
    degree: 'Class X — Secondary',
    location: 'Batala, Punjab',
    period: 'April 2021 – April 2022',
    detail: '93.6%',
  },
]

export const certificates: CertificateItem[] = [
  {
    title: 'Responsible and Safe AI Systems',
    issuer: 'NPTEL',
    date: 'November 2026',
  },
  {
    title: 'MERN Stack Bootcamp — Full Stack Development and DevOps',
    issuer: 'Bootcamp Certification',
    date: 'July 2026',
  },
  {
    title: 'Database Management Systems (DBMS)',
    issuer: 'Infosys Springboard',
    date: 'July 2026',
  },
]

export const contactLinks = {
  emailAddress: 'parmeetkaur.tech@gmail.com',
  email: 'mailto:parmeetkaur.tech@gmail.com',
  phoneDisplay: '+91-8968193130',
  phone: 'tel:+918968193130',
  linkedinDisplay: 'linkedin.com/in/-parmeetkaur',
  linkedin: 'https://linkedin.com/in/-parmeetkaur',
  githubDisplay: 'github.com/parmeetkxur',
  github: 'https://github.com/parmeetkxur',
}
