import React from "react"

import styles from "./BackgroundImage.module.css"

/**
 * A page-sized background image which will be with respect to the page, not its parent container.
 * @param {string} src image source uri 
 */
export default function BackgroundImage(props) {
  return (
    <>
      <img className={styles.img} src={props.src} alt="Backdrop" />
    </>
  )
}
