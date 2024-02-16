import React from "react"
import Title from "../components/text/title/Title"
import Paragraph from '../components/text/paragraph/Paragraph'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
  console.log("Home page rendered")
  return (
    <>
      <Title>Hello there!</Title>
      <Paragraph>
        Welcome to my personal website, where you can see all of my proudest work in Software Development and online experiences.
      </Paragraph>
    </>
  )
}