import React from 'react'

import Title from "../components/text/title/Title"
import ExperienceSummary from '../components/content/experience-summary/ExperienceSummary'
import wipro from "../resources/img/wipro-logo.png"
import easybites from "../resources/svg/EasyIcon_green.svg"
import Paragraph from '../components/text/paragraph/Paragraph'

export default function Jobs() {
  return (
    <>
      <Title>Professional Experience</Title>
      <ExperienceSummary
        logo={<img src={wipro} alt={"Wipro company logo"} />}
        title="Site Reliability Engineer"
        affiliation="Wipro Consultant"
        beginDate="Jun. 2022" endDate="Dec. 2023" duration="1yr 7mos"
      >
        <Paragraph>
          Monitored and improved the behavior, reliability, and performance of Verizon's customer-facing applications.
        </Paragraph>
        <ul>
          <li>
            Analyzed the impact of dozens of service disruptions each week, giving insights into the experience of thousands of customers
          </li>
          <li>
            Raised and supported 100+ crisis recovery sessions to restore functionality of business-critical systems
          </li>
          <li>
            Ensured smooth deployment of over 40 major and minor software releases
          </li>
          <li>
            Innovated upon analysis capabilities by leveraging a deep knowledge of Glassbox and Kibana
          </li>
          <li>
            Led daily prioritization and task allocation meetings for a team of 6
          </li>
          <li>
            Reduced the error rate across all applications from 11% to 7% by incorporating new monitoring techniques into the team's daily routines
          </li>
        </ul>
      </ExperienceSummary>
      <ExperienceSummary
        logo={<img src={easybites} alt={"EasyBites logo"} />}
        title="Frontend React Developer"
        affiliation="EasyBites"
        beginDate="Jul. 2021" endDate="Sep. 2021" duration="3mos"
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