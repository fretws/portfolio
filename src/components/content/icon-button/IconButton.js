import React from "react"
import github from "../../../resources/svg/github-white.svg"
import link from "../../../resources/svg/external-link-white.svg"

import styles from "./IconButton.module.css"

/**
 * @param {"default" | "github"} variant
 * @param {string} link Link to open in new tab when icon is clicked
 */
export default function IconButton(props) {

  switch (props.variant) {
    case ("github"):
      return (
        <BaseIconButton color="black" icon={github} link={props.link} alt="Github" />
      )
    default:
      return (
        <BaseIconButton color="accent" icon={link} link={props.link} alt="External Link" />
      )
  }
}

/**
 * @param {"black"} color
 * @param {string} icon uri for the icon resource
 * @param {string} link Link to open in new tab when icon is clicked
 * @param {string} alt alt text for icon
 */
function BaseIconButton(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <button className={`${styles.button} ${styles[props.color]}`}>
        <img className={styles.icon} src={props.icon} alt={props.alt} />
      </button>
    </a>
  )
}
