import React from "react"

import styles from "./GradePoint.module.css"

/**
 * @param {className} className Styling to be applied to this component
 */
export default function GradePoint(props) {
  return (
    <table className={props.className}>
      <tr>
        <td>Department GPA</td>
        <td className={styles.spaceBefore}>— 3.94</td>
      </tr>
      <tr>
        <td>Cumulative GPA</td>
        <td className={styles.spaceBefore}>— 3.64</td>
      </tr>
    </table>
  )
}
