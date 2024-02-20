import React from "react"
import Stack from "react-bootstrap/Stack"
import Paragraph from '../../text/paragraph/Paragraph'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    // Attributions and contact info
    <div className={styles.footer}>
      <div className={styles.column}>
        <h3>Contact</h3>
        <Stack>
          <a href='mailto:shanefretwellbef@gmail.com'>shanefretwellbef@gmail.com</a>
          <a href='http://www.linkedin.com/in/shane-fretwell'>Linkedin</a>
          <a href='https://github.com/fretws'>Github</a>
        </Stack>
      </div>
      <div className={styles.column}>
        <h3>Attributions</h3>
        <Stack>
          <Paragraph>
            Cybersecurity icon by Good Wife from <a href="https://thenounproject.com/icon/cybersecurity-6535591/" target="_blank" title="Cybersecurity Icons" rel="noreferrer">Noun Project</a> (CC BY 3.0)
          </Paragraph>
        </Stack>
      </div>
    </div>
  )
}
