import React from 'react';

import sprout from '../resources/svg/sprig-icon.svg'

import Title from "../components/text/title/Title"
import Paragraph from '../components/text/paragraph/Paragraph'
import ExperienceSummary from '../components/content/experience-summary/ExperienceSummary'

// TODO: Include social engineering / cellular betrayal project

export default function Projects() {
  console.log("Projects page rendered")
  return (
    <>
      <Title>Personal and Academic Projects</Title>
      <ExperienceSummary
        logo={<img src={sprout} alt={"Sprout gameplay screenshot"} />}
        jobTitle="Software Engineering Lead"
        affiliation={<><a href="/education">University of Washington</a> Capstone Project</>}
        beginDate="Jan. 2022" endDate="Jun. 2022" duration="3mos"
        artifactLink="https://sproutuw.netlify.app"
        githubLink="https://github.com/Vivianngu3/GameUnity"
      >
        <Paragraph>
          Researched, designed, and developed an online game in 11 agile sprints.
        </Paragraph>
        <ul>
          <li>Designed the application's file structure and components to streamline development and increase separation of concerns</li>
          <li>Documented key design decisions to unify understanding of the application's software architecture</li>
          <li>Guided a team of 4 engineers through 10 peer coding sessions to share knowledge and increase productivity</li>
          <li>Crafted two interlocking state management systems to handle the numerous possible game states</li>
          <li>Written in Typescript using React, deployed using Netlify</li>
        </ul>
      </ExperienceSummary>
    </>
  )
}