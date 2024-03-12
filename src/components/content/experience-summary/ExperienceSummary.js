import React from "react"

import LogoTitle from '../logo-title/LogoTitle'

/**
 * Gives a summary of a job or project experience with a logo
 * Element children will be included below the summary info that is provided as props
 * Responsive sizing to screen width
 * @typedef {object} props
 * @param {React.JSX} props.logo JSX tag for the logo (typically an \<img>)
 * @param {string} props.jobTitle
 * @param {string | React.JSX} props.affiliation company or affiliation of the project/work experience
 * @param {string} props.beginDate begin date of work as text
 * @param {string} props.endDate end date of work as text
 * @param {string} props.duration duration of work
 * @param {string} props.artifactLink link to the deployed project (optional)
 * @param {string} props.githubLink link to the github repo (optional)
 * @returns
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