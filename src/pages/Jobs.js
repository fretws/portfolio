import React from 'react'
import Title from "../components/text/title/Title"
import LogoTitle from '../components/content/logo-title/LogoTitle'
// import Paragraph from '../components/text/paragraph/Paragraph'
import wipro from "../resources/img/wipro-logo.png"

export default function Jobs() {
  console.log("Jobs page rendered")
  return (
    <>
      <Title>Professional Experience</Title>
      <LogoTitle src={wipro} alt={"Wipro company logo."}>
        <LogoTitle.Title>Site Reliability Engineer</LogoTitle.Title>
        <LogoTitle.Text>Wipro</LogoTitle.Text>
      </LogoTitle>
    </>
  )
}