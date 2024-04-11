import React from "react"

import LogoTitle from '../logo-title/LogoTitle'
import IconButton from '../icon-button/IconButton';

/**
 * Gives a summary of a job or project experience with a logo
 * Element children will be included below the summary info that is provided as props
 * Responsive sizing to screen width
 * @param {React.JSX} logo JSX tag for the logo (typically an \<img>)
 * @param {string} title
 * @param {string | React.JSX} affiliation company or affiliation of the project/work experience
 * @param {string} beginDate begin date of work as text
 * @param {string} endDate end date of work as text
 * @param {string} duration duration of work
 * @param {string} artifactLink link to the deployed project (optional)
 * @param {string} githubLink link to the github repo (optional)
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
          {props.title}
        </LogoTitle.Title>
        <LogoTitle.IconLinks>
          {props.githubLink && <IconButton variant="github" link={props.githubLink} />}
          {props.artifactLink && <IconButton variant="default" link={props.artifactLink} />}
        </LogoTitle.IconLinks>
        <LogoTitle.Text>
          {props.affiliation}
          <br />
          {props.beginDate} - {props.endDate} ({props.duration})
        </LogoTitle.Text>
      </LogoTitle>
      {props.children}
    </>
  )
}