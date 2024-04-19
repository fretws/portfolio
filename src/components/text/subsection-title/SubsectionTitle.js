import React from "react"
import styles from "./SubsectionTitle.module.css"

/**
 * @param {React.JSX} children Text to be displayed
 */
export default function SubsectionTitle(props) {
  return (
    <h3 className={styles.subsectionTitle}>{props.children}</h3>
  )
}
