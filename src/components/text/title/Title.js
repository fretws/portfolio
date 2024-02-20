import React from "react"
import styles from "./Title.module.css"

/* 
props {

}
 */
export default function Title(props) {
  return (
    <h1 className={styles.title}>{props.children}</h1>
  )
}