import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import styles from './Navigation.module.css'

/**
 * Navigation bar with title and links
 */
export default function Navigation() {
  return (
    <Navbar expand="lg" className={styles.bar}>
      <Container fluid className={styles.container + ' px-md-4'}>
        <Navbar.Brand>Shane Fretwell</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/jobs">Jobs</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            {/* <Nav.Link href="/research">Research</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}