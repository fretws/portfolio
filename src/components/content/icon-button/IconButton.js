import React from "react"
import github from "../../../resources/svg/github-white.svg"
import ischool from "../../../resources/svg/iSchoolSymbolOnly_RGB_White.svg"
import uw from "../../../resources/svg/uw-white.svg"
import link from "../../../resources/svg/external-link-white.svg"

import styles from "./IconButton.module.css"

/**
 * @param {"default" | "github" | "ischool" | "uw"} variant
 * @param {string} link Link to open in new tab when icon is clicked
 */
export default function IconButton(props) {

  switch (props.variant) {
    case ("uw"):
      return (
        <BaseIconButton color="purple" icon={uw} link="https://www.washington.edu/" alt="University of Washington" />
      )
    case ("github"):
      return (
        <BaseIconButton color="black" icon={github} link={props.link} alt="Github" />
      )
    case ("ischool"):
      return (
        <BaseIconButton color="purple" icon={ischool} link="https://ischool.uw.edu/programs/informatics" alt="University of Washington iSchool" />
      )
    default:
      return (
        <BaseIconButton color="accent" icon={link} link={props.link} alt="External Link" />
      )
  }
}

/**
 * @param {"black" | "accent" | "ischool"} color
 * @param {string} icon uri for the icon resource
 * @param {string} link Link to open in new tab when icon is clicked
 * @param {string} alt alt text for icon
 */
function BaseIconButton(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      {/* props.color is the name of the css class used to assign a color to the button */}
      <button className={`${styles.button} ${styles[props.color]}`}>
        <img className={styles.icon} src={props.icon} alt={props.alt} />
      </button>
    </a>
  )
}
