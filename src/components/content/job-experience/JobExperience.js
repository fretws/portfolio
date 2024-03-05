import React from "react"

import LogoTitle from '../logo-title/LogoTitle'

/*
 * Gives a summary of a job experience with a logo
 * Element children will be included below the summary info that is provided as props
 * Responsive sizing to screen width
 *  props {
 *    src: logo source file
 *    alt: logo alt text
 *    jobTitle
 *    company
 *    beginDate: begin date of work as text
 *    endDate: end date of work as text
 *    duration: duration of work
 *  }
 */
export default function JobExperience(props) {
  return (
    <>
      <LogoTitle src={props.src} alt={props.alt}>
        <LogoTitle.Title>
          {props.jobTitle}
        </LogoTitle.Title>
        <LogoTitle.Text>
          {props.company}
          <br />
          {props.beginDate} - {props.endDate} ({props.duration})
        </LogoTitle.Text>
      </LogoTitle>
      {props.children}
    </>
  )
}