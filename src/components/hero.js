import React from "react"
import styled from "styled-components"
import heroImage from "./../img/hero-img.png"

const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  height: 320px;
  background-image: url(${heroImage});
  background-position: center;
  background-size: cover;
`

const HeroBorder = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  border: solid #fff 1px;
`

const TextGroup = styled.div`
  padding: 4rem 0 0 2rem;
`

const Heading = styled.h1`
  font-weight: 400;
  color: #fff;
  font-size: 2.5rem;
`

const Subheading = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-top: 0.5rem;
`

const Hero = ({ heading, subheading }) => {
  return (
    <HeroSection>
      <TextGroup>
        <Heading>{heading}</Heading>
        <Subheading>{subheading}</Subheading>
      </TextGroup>
      <HeroBorder />
    </HeroSection>
  )
}

export default Hero
