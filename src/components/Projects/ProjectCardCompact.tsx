import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { RiGithubLine, RiLockLine, RiArrowRightUpLine } from 'react-icons/ri'
import type { Project } from '../../data/projects.ts'
import styles from './Projects.module.css'

interface Props {
  project: Project
  index: number
  inView: boolean
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
}

export default function ProjectCardCompact({ project, index, inView }: Props) {
  const primaryLink = project.live ?? project.demoUrl ?? project.github

  return (
    <motion.article
      className={styles.compactCard}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      aria-label={project.name}
    >
      {/* Left — title + outcome */}
      <div className={styles.compactLeft}>
        <h3 className={styles.compactTitle}>
          {project.name}
          {project.isPrivate && (
            <span className={styles.privateIcon} title="Private repository">
              <RiLockLine size={12} />
            </span>
          )}
        </h3>
        <p className={styles.compactOutcome}>{project.outcome}</p>
      </div>

      {/* Center — stack tags */}
      <div className={styles.compactStack}>
        {project.stack.slice(0, 3).map(tech => (
          <span key={tech} className={styles.techTag}>{tech}</span>
        ))}
      </div>

      {/* Right — links */}
      <div className={styles.compactActions}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.compactLink}
            aria-label={`GitHub — ${project.name}`}
          >
            <RiGithubLine size={16} />
          </a>
        )}
        {primaryLink && primaryLink !== project.github && (
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.compactLink} ${styles.compactLinkAccent}`}
            aria-label={`View ${project.name}`}
          >
            <RiArrowRightUpLine size={16} />
          </a>
        )}
        {project.isPrivate && !project.github && (
          <span className={styles.privateNote}>
            <RiLockLine size={13} />
          </span>
        )}
      </div>
    </motion.article>
  )
}