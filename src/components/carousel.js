import React, { Component } from "react"
import Slider from "react-slick"
import "../styles/slick.scss"
import "../styles/slick-theme.scss"
import styled from "styled-components"
import startQuote from "./../img/starting-quote.svg"
import endQuote from "./../img/ending-quote.svg"
import { breakpoints } from "./../styles/master"

const CarouselContainer = styled.div`
  padding: 3px 2rem;
  margin-top: 3rem;
`

const QuoteContainer = styled.div`
  padding: 1rem;
  height: 450px;
  display: grid !important;
  place-items: center;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: 3rem 1rem;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 3rem 3rem;
    height: 550px;
  }
  @media only screen and (min-width: ${breakpoints.desktopLarge}) {
    padding: 3rem 5rem;
  }

  &:focus {
    outline: none;
  }
`

const TestimonialQuote = styled.p`
  position: relative;
  font-size: 0.75rem;
  line-height: 2;
  padding: 0 0rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 1rem;
    line-height: 1.8;
  }

  :before {
    content: " ";
    position: absolute;
    width: 25px;
    height: 20px;
    background-image: url(${startQuote});
    background-repeat: no-repeat;
    top: -1rem;
    left: -0.8rem;
  }
  :after {
    content: " ";
    position: absolute;
    width: 25px;
    height: 20px;
    background-image: url(${endQuote});
    background-repeat: no-repeat;
    bottom: -0.8rem;
    right: -0.6rem;
  }
`

const QuoteAuthor = styled.p`
  font-weight: bold;
  margin-top: 2rem;
`

const AuthorTitle = styled.p`
  font-size: 0.8rem;
  font-weight: regular;
  font-style: italic;
  margin-top: 0.5rem;
`

export default class Carousel extends Component {
  render() {
    const { testimonials } = this.props

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <CarouselContainer>
        <Slider {...settings}>
          {testimonials.map((item, i) => {
            return (
              <QuoteContainer key={i}>
                <div>
                  <TestimonialQuote>{item.quote}</TestimonialQuote>
                  <QuoteAuthor>- {item.author}</QuoteAuthor>
                  {item.position && <AuthorTitle>{item.position}</AuthorTitle>}
                </div>
              </QuoteContainer>
            )
          })}
        </Slider>
      </CarouselContainer>
    )
  }
}
