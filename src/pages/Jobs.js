import React from 'react'

import Title from "../components/text/title/Title"
import JobExperience from '../components/content/job-experience/JobExperience'
import wipro from "../resources/img/wipro-logo.png"
import Paragraph from '../components/text/paragraph/Paragraph'

export default function Jobs() {
  console.log("Jobs page rendered")
  return (
    <>
      <Title>Professional Experience</Title>
      <JobExperience
        src={wipro} alt={"Wipro company logo."}
        jobTitle={"Site Reliability Engineer"}
        company={"Wipro Consultant"}
        beginDate={"Jun. 2022"} endDate={"Dec. 2023"} duration={"1yr 7mos"}
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
      </JobExperience>
    </>
  )
}