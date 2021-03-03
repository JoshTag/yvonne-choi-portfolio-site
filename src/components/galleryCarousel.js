import React, { createRef, useState, useEffect } from "react"
import Slider from "react-slick"
import "../styles/slick.scss"
import "../styles/slick-theme.scss"
import styled from "styled-components"
import { breakpoints } from "./../styles/master"

const ImageWrapper = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;

  @media only screen and (min-width: ${breakpoints.tabletLarge}) {
    height: 375px;
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    height: 600px;
  }

  & > img {
    height: 100%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const ThumbnailWrapper = styled.div`
  height: 75px;
  position: relative;
  overflow: hidden;

  @media only screen and (min-width: ${breakpoints.tabletLarge}) {
    height: 100px;
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    height: 150px;
  }

  & > img {
    height: 100%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const GalleryCarousel = ({ photos }) => {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)

  const slider1 = createRef(null)
  const slider2 = createRef(null)

  useEffect(() => {
    const sliderOne = slider1.current
    const sliderTwo = slider2.current

    setNav1(sliderOne)
    setNav2(sliderTwo)
  }, [slider1, slider2])

  return (
    <div>
      <Slider asNavFor={nav2} ref={slider1} arrows={false}>
        {photos.map((item, i) => {
          return (
            <ImageWrapper key={`main ${i}`}>
              <img src={item.image} alt={`Gallery ${i + 1}`} />
            </ImageWrapper>
          )
        })}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
      >
        {photos.map((item, i) => {
          return (
            <ThumbnailWrapper key={`nav ${i}`}>
              <img
                src={item.image}
                alt={`Gallery Thumbnail ${i + 1}`}
              />
            </ThumbnailWrapper>
          )
        })}
      </Slider>
    </div>
  )
}

export default GalleryCarousel
