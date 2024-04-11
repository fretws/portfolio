import React from 'react';

import sprout from '../resources/svg/sprig-icon.svg'
import easybites from '../resources/svg/EasyIcon_green.svg'

import Title from "../components/text/title/Title"
import Paragraph from '../components/text/paragraph/Paragraph'
import ExperienceSummary from '../components/content/experience-summary/ExperienceSummary'

// TODO: Include social engineering / cellular betrayal project

export default function Portfolio() {
  return (
    <>
      <Title>Software Development Portfolio</Title>
      <ExperienceSummary
        logo={<img src={sprout} alt="Sprout icon" />}
        title="Sprout - The Life of a Plant"
        affiliation={<><a href="/education">University of Washington</a> - Capstone Project</>}
        beginDate="Jan. 2022" endDate="Jun. 2022" duration="6mos"
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
      <ExperienceSummary
        logo={<img src={easybites} alt="Easybites logo" />}
        title="Easybites - Bring your recipes to life"
        affiliation={<><a href="/jobs">Easybites</a> - Seattle Tech Startup</>}
        beginDate="Jul. 2021" endDate="Sep. 2021" duration="3mos"
        artifactLink="https://easybites-olive.vercel.app/"
      >
        <Paragraph>
          Development of a responsive, efficient, and modern Minimum Viable Product for EasyBites.
        </Paragraph>
        <ul>
          <li>
            Worked in a team of 9 developers, utilizing Gitlab and peer-reviewed pull requests for improved collaboration
          </li>
          <li>
            Completed over 65 Jira tickets for component creation, bug fixes, and page development
          </li>
          <li>
            Engaged with UX researchers and designers to tailor the customer experience according to user feedback
          </li>
          <li>
            Refactored existing code base to increase component versatility and improve readability
          </li>
          <li>
            Written in Typescript utilizing Next.js with deployment and hosting on Firebase
          </li>
        </ul>
      </ExperienceSummary>
    </>
  )
}