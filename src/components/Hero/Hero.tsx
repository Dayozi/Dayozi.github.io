import { motion } from 'framer-motion'
import { RiArrowDownLine } from 'react-icons/ri'
import type { Variants } from 'framer-motion'
import styles from './Hero.module.css'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero}>
      {/* Grid lines decoration */}
      <div className={styles.gridLines} aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={styles.gridLine} />
        ))}
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Availability badge */}
        <motion.div
          className={styles.badge}
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className={styles.greenDot} />
          <span>Available for new projects</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className={styles.heading}
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          I Build Web
          <br />
          <span className={styles.headingAccent}>Applications</span>
          <br />
          That Work.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className={styles.sub}
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Backend systems and web solutions for businesses —<br className={styles.br} />
          based in Abuja, Nigeria, working with clients worldwide.
        </motion.p>

        {/* Timezone */}
        <motion.p
          className={styles.timezone}
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          WAT (UTC+1) &mdash; Remote Friendly
        </motion.p>

        {/* Single CTA */}
        <motion.div
          className={styles.ctas}
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <button className="btn btn-primary" onClick={scrollToWork}>
            Explore My Work
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          className={styles.scrollHint}
          onClick={scrollToAbout}
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          aria-label="Scroll to about section"
        >
          <RiArrowDownLine size={18} />
          <span>Scroll</span>
        </motion.button>
      </div>

      {/* Editorial section number */}
      <span className={styles.sectionNum} aria-hidden="true">01</span>
    </section>
  )
}