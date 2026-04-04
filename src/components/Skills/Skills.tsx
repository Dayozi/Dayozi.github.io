import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import skillCategories from '../../data/skills.ts'
import styles from './Skills.module.css'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className={`section ${styles.skills}`} ref={ref}>
      <div className="container">

        {/* Section label */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <p className="section-label">03 / Skills</p>
          <h2 className="section-title">What I Work With</h2>
          <div className="amber-rule" />
        </motion.div>

        {/* Intro line */}
        <motion.p
          className={styles.intro}
          custom={1}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          Tools and technologies I use to build real systems — grouped by where they live in the stack.
        </motion.p>

        {/* Skill categories */}
        <div className={styles.categories}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              className={styles.category}
              custom={catIndex + 2}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              {/* Category header */}
              <div className={styles.categoryHeader}>
                <span className={styles.categoryLabel}>{category.label}</span>
                <span className={styles.categoryLine} aria-hidden="true" />
              </div>

              {/* Tags */}
              <div className={styles.tags}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className={styles.note}
          custom={skillCategories.length + 3}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          I pick the right tool for the job — not the most fashionable one.
        </motion.p>

      </div>

      <span className={styles.sectionNum} aria-hidden="true">03</span>
    </section>
  )
}