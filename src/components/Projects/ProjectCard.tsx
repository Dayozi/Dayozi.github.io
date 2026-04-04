import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { RiGithubLine, RiExternalLinkLine, RiLockLine, RiEyeLine } from 'react-icons/ri'
import type { Project } from '../../data/projects.ts'
import styles from './Projects.module.css'

interface Props {
  project: Project
  index: number
  inView: boolean
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function ProjectCard({ project, index, inView }: Props) {
  const isFeatured = project.badges.includes('Featured')
  const [hovered, setHovered] = useState(false)

  // Show GIF on hover only if the project has one
  const thumbSrc = hovered && project.gif ? project.gif : project.image

  return (
    <motion.article
      className={`${styles.card} ${isFeatured ? styles.featured : ''}`}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      aria-label={project.name}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Thumbnail ── */}
      <div className={styles.thumb}>
        <img
          src={thumbSrc}
          alt={`${project.name} screenshot`}
          className={styles.thumbImg}
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className={`${styles.overlay} ${hovered ? styles.overlayVisible : ''}`}>
          <div className={styles.overlayActions}>
            {project.live || project.demoUrl ? (
              <a
                href={project.live ?? project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.overlayBtn}
                aria-label={`View ${project.name} demo`}
              >
                <RiEyeLine size={15} />
                <span>View Demo</span>
              </a>
            ) : null}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.overlayBtn} ${styles.overlayBtnGhost}`}
                aria-label={`View ${project.name} on GitHub`}
              >
                <RiGithubLine size={15} />
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Badges ── */}
      {project.badges.length > 0 && (
        <div className={styles.badges}>
          {project.badges.map(badge => (
            <span
              key={badge}
              className={`${styles.badge} ${badge === 'Featured' ? styles.badgeFeatured : styles.badgeClient}`}
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {/* ── Card body ── */}
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{project.name}</h3>
          {project.isPrivate && (
            <span className={styles.privateIcon} title="Private repository">
              <RiLockLine size={14} />
            </span>
          )}
        </div>

        <p className={styles.outcome}>{project.outcome}</p>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.stack}>
          {project.stack.map(tech => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
        </div>
      </div>

      {/* ── Actions ── */}
      <div className={styles.actions}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
            aria-label={`View ${project.name} on GitHub`}
          >
            <RiGithubLine size={16} />
            <span>GitHub</span>
          </a>
        )}
        {(project.live || project.demoUrl) && (
          <a
            href={project.live ?? project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
            aria-label={`View ${project.name} live`}
          >
            <RiExternalLinkLine size={16} />
            <span>Live</span>
          </a>
        )}
        {project.isPrivate && !project.github && (
          <span className={styles.privateNote}>
            <RiLockLine size={14} />
            Private — client project
          </span>
        )}
      </div>
    </motion.article>
  )
}