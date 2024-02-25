import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./LogoTitle.module.css"

/*  Props {
 *    src: logo source file,
 *    alt: alt text,
 *    title: text of the title next to the logo
 * }
 */

function LogoTitle(props) {
  return (
    <Container>
      <Col>
        <Row>
          <img src={props.src} alt={props.alt} className={styles.logo} />
        </Row>
      </Col>
      <Col>
        <Row>
          {props.children}
        </Row>
      </Col>
    </Container>
  )
}

function Title(props) {
  return (
    <h3 className={styles.title}>{props.children}</h3>
  )
}

function Text(props) {
  return (
    <p className={styles.text}>{props.children}</p>
  )
}

LogoTitle.Title = Title;
LogoTitle.Text = Text;

export default LogoTitle