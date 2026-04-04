import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  RiMailLine,
  RiLinkedinLine,
  RiGithubLine,
  RiTimeLine,
  RiCheckboxCircleLine,
} from 'react-icons/ri'
import styles from './Contact.module.css'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
  }),
}

const contactItems = [
  {
    icon: <RiMailLine size={18} />,
    label: 'Email',
    value: 'emmanuelowoeyet@gmail.com',
    href: 'mailto:emmanuelowoeyet@gmail.com',
  },
  {
    icon: <RiLinkedinLine size={18} />,
    label: 'LinkedIn',
    value: 'emmanuel-owoeye',
    href: 'https://linkedin.com/in/emmanuel-owoeye-886992276',
  },
  {
    icon: <RiGithubLine size={18} />,
    label: 'GitHub',
    value: 'github.com/Dayozi',
    href: 'https://github.com/Dayozi',
  },
  {
    icon: <RiTimeLine size={18} />,
    label: 'Timezone',
    value: 'WAT (UTC+1)',
    href: null,
  },
  {
    icon: <RiCheckboxCircleLine size={18} />,
    label: 'Response time',
    value: 'Usually within 24 hours',
    href: null,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className={`section ${styles.contact}`} ref={ref}>
      <div className="container">

        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <p className="section-label">05 / Contact</p>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="accent-rule" />
        </motion.div>

        <div className={styles.grid}>

          <div className={styles.leftCol}>
            <motion.p
              className={styles.intro}
              custom={1}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              Whether you need a web application built from scratch, an existing
              system improved, or a developer to join your team — I am open to
              the conversation.
            </motion.p>

            <motion.p
              className={styles.sub}
              custom={2}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              I work with businesses in Nigeria and internationally. If you have
              a project in mind, send me an email and let's talk about what you
              need.
            </motion.p>

            <motion.a
              href="mailto:emmanuelowoeyet@gmail.com"
              className={`btn btn-primary ${styles.cta}`}
              custom={3}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              <RiMailLine size={16} />
              Send Me an Email
            </motion.a>
          </div>

          <motion.div
            className={styles.rightCol}
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <div className={styles.contactList}>
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className={styles.contactItem}
                  custom={i + 4}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                >
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={styles.contactValue}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.contactValuePlain}>{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <span className={styles.sectionNum} aria-hidden="true">05</span>
    </section>
  )
}