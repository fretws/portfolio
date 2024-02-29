import React from "react"
import styles from "./Paragraph.module.css"

/* 
props {

}
 */
export default function Paragraph(props) {
  return (
    <p className={styles.paragraph}>{props.children}</p>
  )
}