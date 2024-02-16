import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'

export default function Navigation () {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Shane Fretwell</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}