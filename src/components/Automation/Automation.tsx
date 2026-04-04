import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { RiArrowRightLine} from 'react-icons/ri'
import styles from './Automation.module.css'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
  }),
}

const scenarios = [
  {
    id: 1,
    name: 'Multi-Action Lead System',
    description: 'New lead triggers simultaneous Telegram alert, Outlook email, and Slack notification — zero manual follow-up.',
    // ✏️ Replace with: '/src/assets/autoTwo.png' or move file to public/
    image: '/autoOne.png',
    tags: ['Google Sheets', 'Telegram', 'Outlook', 'Slack'],
  },
  {
    id: 2,
    name: 'Paystack Payment System',
    description: 'Webhook catches every payment event — success, failure, refund — and routes each to the right Telegram alert instantly.',
    image: '/autoTwo.png',
    tags: ['Webhooks', 'Paystack', 'Telegram', 'Router'],
  },
  {
    id: 3,
    name: 'Weekly Business Report',
    description: 'Aggregates data from multiple Google Sheets sources and delivers a formatted summary email every week — hands-free.',
    image: '/autoThree.png',
    tags: ['Google Sheets', 'Tools', 'Outlook'],
  },
  {
    id: 4,
    name: 'Automated Welcome Email',
    description: 'Watches for new rows in Google Sheets and fires a personalised Outlook welcome email within minutes of signup.',
    image: '/autoFour.png',
    tags: ['Google Sheets', 'Outlook'],
  },
]

export default function Automation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState(0)

  const current = scenarios[active]

  return (
    <section id="automation" className={`section ${styles.automation}`} ref={ref}>
      <div className="container">

        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <p className="section-label">04 / Automation</p>
          <h2 className="section-title">Automation & Workflows</h2>
          <div className="accent-rule" />
        </motion.div>

        <motion.p
          className={styles.intro}
          custom={1}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          I don't just build apps — I automate the work around them. These are live Make scenarios solving real business problems.
        </motion.p>

        {/* Main layout: image left, scenarios right */}
        <motion.div
          className={styles.layout}
          custom={2}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          {/* Left — workflow canvas screenshot */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <img
                key={current.id}
                src={current.image}
                alt={`${current.name} workflow`}
                className={styles.workflowImg}
                loading="lazy"
              />
              {/* Active scenario name overlay */}
              <div className={styles.imageLabel}>
                <span>{current.name}</span>
                <RiArrowRightLine size={14} />
              </div>
            </div>
          </div>

          {/* Right — scenario list */}
          <div className={styles.scenarioCol}>
            {scenarios.map((scenario, i) => (
              <button
                key={scenario.id}
                className={`${styles.scenarioItem} ${active === i ? styles.scenarioActive : ''}`}
                onClick={() => setActive(i)}
              >
                <div className={styles.scenarioTop}>
                  <span className={styles.scenarioNum}>0{i + 1}</span>
                  <h3 className={styles.scenarioName}>{scenario.name}</h3>
                </div>
                {active === i && (
                  <div className={styles.scenarioBody}>
                    <p className={styles.scenarioDesc}>{scenario.description}</p>
                    <div className={styles.scenarioTags}>
                      {scenario.tags.map(tag => (
                        <span key={tag} className={styles.scenarioTag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            ))}

            {/* Bottom note */}
            <p className={styles.note}>
              Built with Make (formerly Integromat) &mdash; 15+ live scenarios in production.
            </p>
          </div>
        </motion.div>

      </div>

      <span className={styles.sectionNum} aria-hidden="true">04</span>
    </section>
  )
}