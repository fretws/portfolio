import React from "react"
import styles from "./SectionTitle.module.css"

/**
 * @param {React.JSX} children Text to be displayed
 */
export default function SectionTitle(props) {
  return (
    <h2 className={styles.sectionTitle}>{props.children}</h2>
  )
}
