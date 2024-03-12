import React from "react"
import styles from "./Paragraph.module.css"

/**
 * @typedef {object} props
 * @param {React.JSX} props.children Text to be displayed
 */
export default function Paragraph(props) {
  return (
    <p className={styles.paragraph}>{props.children}</p>
  )
}