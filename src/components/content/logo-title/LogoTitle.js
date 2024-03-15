import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./LogoTitle.module.css"

/**
 * @param {React.JSX} logo Logo to be displayed
 * @param {React.JSX} children Title with optional Text.
 * @example 
 * ```JavaScript
 * <LogoTitle logo={<img />}>
 *   <LogoTitle.Title>Title content</LogoTitle.Title>
 *   <LogoTitle.Text>Text content</LogoTitle.Text>
 * </LogoTitle>
 * ```
 * @see {@link Title LogoTitle.Title}
 * @see {@link Text LogoTitle.Text}
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

/**
 * @alias LogoTitle.Title
 * @param {React.JSX} props.children Title to be displayed
 */
function Title(props) {
  return (
    <h3 className={styles.title}>{props.children}</h3>
  )
}

/**
 * @alias LogoTitle.Text
 * @param {React.JSX} props.children Text to be displayed
 */
function Text(props) {
  return (
    <p className={styles.text}>{props.children}</p>
  )
}

Object.assign(LogoTitle, {
  Title: Title,
  Text: Text,
});

export default LogoTitle;