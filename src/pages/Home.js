import React from "react"
import Title from "../components/text/title/Title"
import Paragraph from '../components/text/paragraph/Paragraph'
import Stack from 'react-bootstrap/Stack'
import Carousel from 'react-bootstrap/Carousel'
import CarouselImage from '../components/content/carousel-image/CarouselImage'

import sprout from "../resources/img/sprout-time-lapse.png"
import cellularBetrayal from "../resources/img/social-engineering.png"

export default function Home() {
  console.log("Home page rendered")
  return (
    <Stack gap={2}>
      <Title>Development Spotlight</Title>
      <Paragraph>
        Welcome to my personal website, where you can see all of my proudest work in Software Development and online experiences.
      </Paragraph>
      <Carousel className='carousel-large'>
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
            src={cellularBetrayal}
            alt="Website showing a social engineering scheme to convince the user to download a virus"
            title="Security Vulnerabilities"
          >
            Understanding social engineering by exploiting a real-world vulnerability
          </CarouselImage>
        </Carousel.Item>
      </Carousel>
      <h2>Special Thanks</h2>
      {/* Special thanks to Chen, Roshani, Prakash, and Geoffrey Anderson */}
    </Stack>
  )
}