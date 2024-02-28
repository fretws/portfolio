import React from "react"
import styles from "./SectionTitle.module.css"

export default function SectionTitle(props) {
  return (
    <h2 className={styles.sectionTitle}>{props.children}</h2>
  )
}
