import React, { createRef, useState, useEffect } from "react"
import Slider from "react-slick"
import "../styles/slick.scss"
import "../styles/slick-theme.scss"
import styled from "styled-components"
import Image from "gatsby-image"
import { breakpoints } from "./../styles/master"

const GalleryCarousel = ({ photos }) => {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)

  const slider1 = createRef(slider1)
  const slider2 = createRef(slider2)

  useEffect(() => {
    const sliderOne = slider1.current
    const sliderTwo = slider2.current

    setNav1(sliderOne)
    setNav2(sliderTwo)
  }, [])

  console.log(photos)

  return (
    <div>
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4>
      <Slider asNavFor={nav2} ref={slider1}>
        {photos.map((item, i) => {
          return <img src={item.image} />
        })}
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {photos.map((item, i) => {
          return <img src={item.image} />
        })}
      </Slider>
    </div>
  )
}

export default GalleryCarousel
