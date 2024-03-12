import React from "react"
import styles from "./SectionTitle.module.css"

/**
 * @typedef {object} props
 * @param {React.JSX} props.children Text to be displayed
 */
export default function SectionTitle(props) {
  return (
    <h2 className={styles.sectionTitle}>{props.children}</h2>
  )
}
