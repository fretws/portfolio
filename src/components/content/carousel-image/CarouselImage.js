import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import styles from "./CarouselImage.module.css"

/*
props {
  src: Image route, (For best results, image should be 16x9)
  alt: Image description,
  title: Accompanying title,
  text: Accompanying caption
}
 */

export default function CarouselImage(props) {
  return (
    <>
      <img
        className={styles.image}
        src={props.src}
        alt={props.alt}
      />
      <Carousel.Caption>
        <div className={styles.captionWrapper}>
          <h3>{props.title}</h3>
          <p>{props.children}</p>
        </div>
      </Carousel.Caption>
    </>
  )
}
