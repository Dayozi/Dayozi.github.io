export type ProjectBadge = 'Featured' | 'Client Project'

export interface Project {
  id: number
  name: string
  outcome: string
  description: string
  stack: string[]
  github?: string
  live?: string
  demoUrl?: string
  image: string          // thumbnail — swap these URLs when you have screenshots
  gif?: string           // optional GIF shown on hover (featured projects only)
  isPrivate: boolean
  badges: ProjectBadge[]
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Farm Management System',
    outcome: 'Digitises and automates farm operations previously managed on paper.',
    description:
      'Comprehensive farm operations platform covering animal records, health tracking, breeding, feeding schedules, production logs, inventory, finance, labor management, automated reports, and real-time notifications.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/Dayozi/farm_management_system',
    // ✏️  Replace with your actual screenshot URL
    image: '/images/farm.png',
    gif: '/images/farm-demo.gif',
    isPrivate: false,
    badges: ['Featured'],
  },
  {
    id: 2,
    name: 'School Result Management System',
    outcome: 'Eliminates manual result processing for a private educational institution.',
    description:
      'Complete school management solution with student result processing, RTBC calculations, teacher management, class administration, grade computation, and comprehensive reporting.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    image: '/images/school.png',
    gif: '/images/school-demo.gif',
    isPrivate: true,
    badges: ['Featured', 'Client Project'],
  },
  {
    id: 3,
    name: 'BrainBuilder CBT System',
    outcome: 'Enables institutions to run digital exams without third-party platforms.',
    description:
      'Computer-based testing platform with quiz management, timed assessments, automated scoring, result analytics, and student performance tracking.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Dayozi/brainbuilder-CBT-system',
    image: '/images/brainbuilder.png',
    isPrivate: false,
    badges: [],
  },
  {
    id: 4,
    name: 'Forex Trading Calculator',
    outcome: 'Gives active traders instant risk calculations across multiple currency pairs.',
    description:
      'Risk management tool that calculates pip values, position sizing, and profit/loss projections for multiple currency pairs. Fully mobile-responsive for traders on the move.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Dayozi/Forex-Calculator',
    image: '/images/forex.png',
    isPrivate: false,
    badges: [],
  },
  {
    id: 5,
    name: 'Developer Portfolio',
    outcome: 'A precise, editorial-grade portfolio built to represent real engineering work.',
    description:
      'This portfolio — designed and built from scratch using React, TypeScript, and Framer Motion with a strict editorial design system and no UI libraries.',
    stack: ['React', 'TypeScript', 'Vite', 'Framer Motion'],
    github: 'https://github.com/Dayozi/Dayozi.github.io',
    live: 'https://dayozi-github-io.vercel.app/',
    image: '/images/portfolio.png',
    isPrivate: false,
    badges: [],
  },
]

export default projects