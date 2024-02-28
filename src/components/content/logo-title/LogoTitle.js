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
      <Row>
        <Col xs='12' sm='5' md='4' lg='2'>
          <img src={props.src} alt={props.alt} className={styles.logo} />
        </Col>
        <Col
          className={styles.titleSection}
          xs='12' sm='7'
        >
          {props.children}
        </Col>
      </Row>
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