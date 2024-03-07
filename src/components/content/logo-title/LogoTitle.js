import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./LogoTitle.module.css"

/*  Props {
 *    logo: the JSX for the logo to be displayed
 * }
 */

function LogoTitle(props) {
  return (
    <Container className={styles.container}>
      <Row>
        <Col xs='12' sm='5' md='4' lg='2'>
          {/* A logo wrapper is needed to apply styles to the passed logo without having to modify its immutable className */}
          <div className={styles.logoWrapper}>
            {/* We pass in the JSX for the logo instead of the src and alt for greater flexibility in what JSX is used to display the logo. Still, either an img or svg tag are necessary */}
            {props.logo}
          </div>
          {/* <img src={props.src} alt={props.alt} className={styles.logo} /> */}
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