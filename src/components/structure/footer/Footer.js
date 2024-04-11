import React from "react"
import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Paragraph from '../../text/paragraph/Paragraph'

import styles from './Footer.module.css'

/**
 * Responsive page footer with contact details and attributions
 */
export default function Footer() {
  return (
    // Attributions and contact info
    <>
      <div className={styles.footerSpacer} />
      <Container className={styles.footer}>
        <Row>
          <Col xs='7' sm='6'>
            <h3 className={styles.columnHeader}>Contact</h3>
            <Stack className={styles.links}>
              <a href='mailto:shanefretwellbef@gmail.com'>shanefretwellbef@gmail.com</a>
              <a href='http://www.linkedin.com/in/shane-fretwell'>Linkedin</a>
              <a href='https://github.com/fretws'>Github</a>
            </Stack>
          </Col>
          <Col xs='5' sm='6'>
            <h3 className={styles.columnHeader}>Attributions</h3>
            <Stack>
              <Paragraph>
                Cybersecurity icon by Good Wife from <a href="https://thenounproject.com/icon/cybersecurity-6535591/" target="_blank" title="Cybersecurity Icons" rel="noreferrer">Noun Project</a> (CC BY 3.0)
              </Paragraph>
              <Paragraph>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/blk2PNUlJAYt/external-link">External Link</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
              </Paragraph>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}
