import React from "react"
import styles from "./Paragraph.module.css"

/**
 * @param {React.JSX} children Text to be displayed
 */
export default function Paragraph(props) {
  return (
    <p className={styles.paragraph}>{props.children}</p>
  )
}