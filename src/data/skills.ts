export interface SkillCategory {
  id: string
  label: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend',
    skills: ['PHP', 'Node.js', 'REST APIs'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    id: 'database',
    label: 'Database',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    id: 'automation',
    label: 'Automation',
    skills: ['Make', 'Webhooks', 'Workflow Design'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Git', 'GitHub', 'Postman'],
  },
]

export default skillCategories