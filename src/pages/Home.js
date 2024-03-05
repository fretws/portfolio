import React from "react"
import Title from "../components/text/title/Title"
// import SectionTitle from "../components/text/section-title/SectionTitle"
import Paragraph from '../components/text/paragraph/Paragraph'
import Carousel from 'react-bootstrap/Carousel'
import CarouselImage from '../components/content/carousel-image/CarouselImage'

import sprout from "../resources/img/sprout-time-lapse.png"
import easybites from "../resources/img/easybites-homepage.png"
import cellularBetrayal from "../resources/img/social-engineering.png"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Home() {
  console.log("Home page rendered")
  return (
    <Container className='container-page-width'>
      <Row className="vertical-center">
        <Col xs='12' lg='4'>
          <Title>Development Spotlight</Title>
          <Paragraph>
            Welcome to my personal website, where you can see all of my proudest work in Software Development and online experiences.
          </Paragraph>
        </Col>
        <Col xs='12' lg='8'>
          <Carousel className='carousel-aside'>
            <Carousel.Item>
              <CarouselImage
                src={sprout}
                alt="Screenshot from personal project showing a sunset over a sprouting plant"
                title="Sprout"
              >
                Helping kids grow their science education and environmental awareness
              </CarouselImage>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImage
                src={easybites}
                alt="Screenshot showing the EasyBites homepage"
                title="EasyBites"
              >
                Delivering homecooked meals from chefs in your area
              </CarouselImage>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImage
                src={cellularBetrayal}
                alt="Website showing a social engineering scheme to convince the user to download a virus"
                title="Security Vulnerabilities"
              >
                Understanding social engineering by exploiting a real-world vulnerability
              </CarouselImage>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
        {/* <SectionTitle>Special Thanks</SectionTitle> */}
        {/* Special thanks to Chen, Roshani, Prakash, and Geoffrey Anderson */}
    </Container>
  )
}