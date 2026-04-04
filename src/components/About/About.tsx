import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { RiSearchLine, RiMapLine, RiCodeSSlashLine, RiCheckboxCircleLine } from 'react-icons/ri'
import skillCategories from '../../data/skills.ts'
import styles from './About.module.css'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

const steps = [
  {
    icon: <RiSearchLine size={20} />,
    number: '01',
    title: 'Understand',
    body: 'I learn your business problem before writing a line of code. The right solution starts with the right question.',
  },
  {
    icon: <RiMapLine size={20} />,
    number: '02',
    title: 'Plan',
    body: 'I map out the solution, stack, and timeline clearly upfront — no surprises mid-project.',
  },
  {
    icon: <RiCodeSSlashLine size={20} />,
    number: '03',
    title: 'Build',
    body: 'Clean, secure, documented code delivered in stages with regular updates so you always know where things stand.',
  },
  {
    icon: <RiCheckboxCircleLine size={20} />,
    number: '04',
    title: 'Deliver',
    body: 'Tested, deployed, and handed over with documentation. I do not disappear after launch.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className={`section ${styles.about}`} ref={ref}>
      <div className="container">

        {/* Section label */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <p className="section-label">02 / About</p>
          <h2 className="section-title">About Me</h2>
          <div className="accent-rule" />
        </motion.div>

        {/* Bio + facts two-col */}
        <div className={styles.topGrid}>

          {/* Bio */}
          <div className={styles.bioCol}>
            <motion.p
              className={styles.bio}
              custom={1}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              I am a web application developer based in Abuja, Nigeria, with a focus on
              backend business systems. I build the kind of software that actually runs
              a business — role-based access control, complex database architecture,
              automated workflows, and APIs that other systems depend on.
            </motion.p>

            <motion.p
              className={styles.bio}
              custom={2}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              I care about delivering working software, not just writing code. That means
              I communicate clearly throughout a project, ask the right questions before
              starting, and finish what I start. If something is not working, I say so
              early — not at the deadline.
            </motion.p>
          </div>

          {/* Quick facts */}
          <motion.ul
            className={styles.facts}
            custom={3}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <li>
              <span className={styles.factLabel}>Location</span>
              <span className={styles.factValue}>Abuja, Nigeria</span>
            </li>
            <li>
              <span className={styles.factLabel}>Timezone</span>
              <span className={styles.factValue}>WAT (UTC+1)</span>
            </li>
            <li>
              <span className={styles.factLabel}>Availability</span>
              <span className={styles.factValue}>Open to projects</span>
            </li>
            <li>
              <span className={styles.factLabel}>Remote</span>
              <span className={styles.factValue}>Yes, worldwide</span>
            </li>
          </motion.ul>

        </div>

        {/* Skills */}
        <motion.div
          className={styles.skillsBlock}
          custom={4}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <h3 className={styles.blockTitle}>What I Work With</h3>
          <div className={styles.skillsGrid}>
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.id}
                className={styles.skillCategory}
                custom={5 + i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp}
              >
                <span className={styles.categoryLabel}>{category.label}</span>
                <div className={styles.tags}>
                  {category.skills.map(skill => (
                    <span key={skill} className={styles.tag}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How I Work */}
        <motion.div
          className={styles.process}
          custom={5 + skillCategories.length}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <h3 className={styles.blockTitle}>How I Work</h3>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className={styles.step}
                custom={6 + skillCategories.length + i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp}
              >
                <div className={styles.stepHeader}>
                  <span className={styles.stepIcon}>{step.icon}</span>
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepBody}>{step.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      <span className={styles.sectionNum} aria-hidden="true">02</span>
    </section>
  )
}