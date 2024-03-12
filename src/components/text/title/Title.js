import React from "react"
import styles from "./Title.module.css"

/**
 * @typedef {object} props
 * @param {React.JSX} props.children Text to be displayed
 */
export default function Title(props) {
  return (
    <h1 className={styles.title}>{props.children}</h1>
  )
}