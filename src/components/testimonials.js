import React from "react"
import Carousel from "./carousel"
import styled from "styled-components"
import { colours, breakpoints } from "../styles/master"

const TestimonialsSection = styled.section`
  position: relative;
  background-color: ${colours.primary};
  height: 600px;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    height: 650px;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    height: 760px;
  }
`

const TestimonialsBoarder = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 85%;
  border: solid ${colours.brown} 1px;

  @media only screen and (min-width: ${breakpoints.tabletSmall}){
    top: 8%;
    left: 6%;
    width: 88%;
    height: 84%;
  }

  @media only screen and (min-width: 700px) {
    top: 11%;
  }
`

const TitleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 5%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: ${colours.primary};
  padding: 0 0.5rem;
  z-index: 10;

  @media only screen and (min-width: ${breakpoints.tabletSmall}) {
    top: 3%;
  }
  @media only screen and (min-width: ${breakpoints.tablet}) {
    top: 6%;
  }
`

const TitleBorder = styled.div`
  border: 2px ${colours.brown} solid;
  padding: 0.25rem 0.25rem;
`

const TestimonialsTitle = styled.h2`
  color: ${colours.brown};
  font-size: 1.5rem;
  font-weight: 400;
  border: 1px ${colours.brown} solid;
  padding: 0.5rem 2rem;
`

const Testimonials = ({ testimonials }) => {
  return (
    <TestimonialsSection>
      <TitleContainer>
        <TitleBorder>
          <TestimonialsTitle>Testimonials</TestimonialsTitle>
        </TitleBorder>
      </TitleContainer>
      <TestimonialsBoarder>
        <Carousel testimonials={testimonials} />
      </TestimonialsBoarder>
    </TestimonialsSection>
  )
}

export default Testimonials
