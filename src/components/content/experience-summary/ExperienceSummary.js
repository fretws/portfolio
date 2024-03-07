import React from "react"

import LogoTitle from '../logo-title/LogoTitle'

/*
 * Gives a summary of a job or project experience with a logo
 * Element children will be included below the summary info that is provided as props
 * Responsive sizing to screen width
 *  props {
 *    src: logo source file
 *    alt: logo alt text
 *    jobTitle
 *    affiliation: company or affiliation of the project/work experience
 *    beginDate: begin date of work as text
 *    endDate: end date of work as text
 *    duration: duration of work
 *    artifactLink: link to the deployed project (optional)
 *    githubLink: link to the github repo (optional)
 *  }
 */
export default function ExperienceSummary(props) {
  let logo = props.logo;
  if (props.artifactLink) {
    logo = (
      <a href={props.artifactLink}>
        {props.logo}
      </a>
    )
  }
  return (
    <>
      <LogoTitle logo={logo}>
        <LogoTitle.Title>
          {props.jobTitle}
        </LogoTitle.Title>
        <LogoTitle.Text>
          {props.affiliation}
          <br />
          {props.beginDate} - {props.endDate} ({props.duration})
          {props.githubLink && <><br /><a href={props.githubLink}>Github repo</a></>}
        </LogoTitle.Text>
      </LogoTitle>
      {props.children}
    </>
  )
}