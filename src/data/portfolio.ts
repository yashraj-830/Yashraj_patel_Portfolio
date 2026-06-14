export type SkillGroup = {
  title: string
  icon: string
  skills: string[]
}

export type Project = {
  title: string
  subtitle: string
  description: string
  technologies: string[]
  accent: string
  metrics: string[]
}

export type TimelineItem = {
  phase: string
  title: string
  description: string
}

export type Service = {
  title: string
  icon: string
  description: string
}

export const profile = {
  name: 'Yashraj Singh',
  role: 'Python Django Developer',
  experience: '1+ year of experience',
  email: 'yashraj.singh@example.com',
  location: 'India',
  resumeUrl: '#resume-placeholder',
  githubUrl: 'https://github.com/your-github',
  linkedinUrl: 'https://linkedin.com/in/your-linkedin',
}

export const navItems = [
  'About',
  'Skills',
  'Projects',
  'Journey',
  'Services',
  'Contact',
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend Development',
    icon: 'Server',
    skills: ['Python', 'Django', 'Django REST Framework', 'REST APIs', 'Authentication', 'MVC/MVT Architecture'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['SQL', 'MySQL', 'Relational Design', 'Query Optimization', 'Data Modeling'],
  },
  {
    title: 'Version Control',
    icon: 'GitBranch',
    skills: ['Git', 'GitHub', 'Branching', 'Pull Requests', 'Code Reviews'],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: ['VS Code', 'Postman', 'Linux Basics', 'CLI Workflow', 'Debugging'],
  },
  {
    title: 'Currently Learning',
    icon: 'Rocket',
    skills: ['Redis', 'Celery', 'Docker', 'Nginx', 'AWS', 'System Design'],
  },
]

export const projects: Project[] = [
  {
    title: 'ATS Score Checker',
    subtitle: 'AI-powered resume analysis platform',
    description:
      'Compares resumes against job descriptions, identifies missing keywords, calculates ATS scores, and helps job seekers improve resume relevance for target roles.',
    technologies: ['Python', 'Django', 'DRF', 'AI Workflow', 'SQL', 'Resume Parsing'],
    accent: 'from-cyan-400 to-blue-500',
    metrics: ['ATS scoring', 'Keyword gap analysis', 'Recruiter-friendly insights'],
  },
  {
    title: 'Liza Talk',
    subtitle: 'AI conversational chat application',
    description:
      'A conversational application focused on intelligent interactions, user-friendly communication, secure architecture, and scalable backend design.',
    technologies: ['Python', 'Django', 'REST API', 'Authentication', 'MySQL', 'AI Chat'],
    accent: 'from-sky-400 to-indigo-500',
    metrics: ['Secure architecture', 'Scalable design', 'Clean chat experience'],
  },
]

export const journey: TimelineItem[] = [
  {
    phase: 'Foundation',
    title: 'Python and programming fundamentals',
    description:
      'Built a strong base in Python, problem solving, clean syntax, and backend programming concepts.',
  },
  {
    phase: 'Web Development',
    title: 'Django and REST API development',
    description:
      'Moved into Django, DRF, SQL, MySQL, and practical web application structure for real-world backend systems.',
  },
  {
    phase: 'Projects',
    title: 'Production-minded portfolio work',
    description:
      'Created recruiter-facing projects such as ATS Score Checker and Liza Talk with emphasis on usefulness, security, and maintainability.',
  },
  {
    phase: 'Now',
    title: 'Scaling backend engineering skills',
    description:
      'Currently learning Redis, Celery, Docker, Nginx, AWS, and system design to build stronger distributed backend systems.',
  },
]

export const services: Service[] = [
  {
    title: 'Backend Development',
    icon: 'Layers',
    description:
      'Build structured Django backends with clean business logic, authentication flows, and maintainable app architecture.',
  },
  {
    title: 'REST API Development',
    icon: 'Network',
    description:
      'Design practical DRF APIs with clear endpoints, serializers, validation, and frontend-ready response patterns.',
  },
  {
    title: 'Database Design',
    icon: 'TableProperties',
    description:
      'Create relational schemas, model data flows, and write SQL-backed features that remain easy to query and evolve.',
  },
  {
    title: 'Web Application Development',
    icon: 'Code2',
    description:
      'Develop full web application foundations that connect backend systems with clean user experiences.',
  },
]

export const githubStats = [
  { label: 'Repositories', value: '12+', detail: 'Backend, API, and AI-focused projects' },
  { label: 'Core Stack', value: 'Python', detail: 'Django, DRF, SQL, MySQL, Git' },
  { label: 'Learning Track', value: 'Cloud', detail: 'Docker, Nginx, AWS, Redis, Celery' },
]
