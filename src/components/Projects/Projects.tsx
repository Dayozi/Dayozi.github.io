import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import projects from '../../data/projects.ts'
import ProjectCard from './ProjectCard.tsx'
import ProjectCardCompact from './ProjectCardCompact.tsx'
import styles from './Projects.module.css'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const featured = projects.filter(p => p.badges.includes('Featured'))
  const rest = projects.filter(p => !p.badges.includes('Featured'))

  return (
    <section id="projects" className={`section ${styles.projects}`} ref={ref}>
      <div className="container">

        {/* Section header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <p className="section-label">03 / Projects</p>
          <h2 className="section-title">Selected Work</h2>
          <div className="accent-rule" />
        </motion.div>

        <motion.p
          className={styles.intro}
          custom={1}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          Real systems built for real businesses. Every project here solves a specific problem.
        </motion.p>

        {/* Featured — big 2-col cards with thumbnails */}
        <div className={styles.featuredGrid}>
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 2}
              inView={inView}
            />
          ))}
        </div>

        {/* Divider */}
        {rest.length > 0 && (
          <motion.div
            className={styles.restDivider}
            custom={featured.length + 2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <span>More Projects</span>
          </motion.div>
        )}

        {/* Rest — compact list rows */}
        <div className={styles.compactList}>
          {rest.map((project, i) => (
            <ProjectCardCompact
              key={project.id}
              project={project}
              index={featured.length + i + 3}
              inView={inView}
            />
          ))}
        </div>

      </div>

      <span className={styles.sectionNum} aria-hidden="true">03</span>
    </section>
  )
}