import { RiMailLine, RiLinkedinLine, RiGithubLine } from 'react-icons/ri'
import styles from './Footer.module.css'

const socials = [
  {
    icon: <RiLinkedinLine size={18} />,
    href: 'https://linkedin.com/in/emmanuel-owoeye-886992276',
    label: 'LinkedIn',
  },
  {
    icon: <RiGithubLine size={18} />,
    href: 'https://github.com/Dayozi',
    label: 'GitHub',
  },
  {
    icon: <RiMailLine size={18} />,
    href: 'mailto:emmanuelowoeyet@gmail.com',
    label: 'Email',
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.left}>
          <span className={styles.name}>Emmanuel Owoeye</span>
          <span className={styles.title}>Web Application Developer</span>
        </div>

        <p className={styles.built}>
          Built with React &mdash; Abuja, Nigeria
        </p>

        <div className={styles.right}>
          <div className={styles.socials}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className={styles.socialLink}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <span className={styles.copy}>
            &copy; {year} Emmanuel Owoeye
          </span>
        </div>

      </div>

      <div className={styles.topAccent} aria-hidden="true" />
    </footer>
  )
}