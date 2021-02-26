import React from "react"
import styled from "styled-components"
import { breakpoints } from "./../styles/master"
import Image from "gatsby-image"

const HeroSection = styled.section`
  position: relative;
  height: 320px;

  @media only screen and (min-width: ${breakpoints.tabletSmall}) {
    height: 600px;
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    height: 100vh;
  }
`

const HeroBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`

const HeroImg = styled(Image)`
  height: 100%;
`

const HeroBorder = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  border: solid #fff 1px;

  @media only screen and (min-width: ${breakpoints.tabletSmall}) {
    top: 10%;
    left: 6%;
    width: 88%;
    height: 80%;
  }
`

const TextGroup = styled.div`
  padding: 6rem 2.5rem 0 2.5rem;

  @media only screen and (min-width: ${breakpoints.tabletSmall}) {
    padding: 8rem 0 0 5rem;
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 11rem 0 0 11rem;
  }

  @media only screen and (min-width: ${breakpoints.desktopLarge}) {
    padding: 11rem 0 0 15rem;
  }
`

const Heading = styled.h1`
  font-weight: 400;
  color: #fff;
  font-size: 2.5rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 3.5rem;
  }
  @media only screen and (min-width: ${breakpoints.desktopLarge}) {
    font-size: 4rem;
  }
`

const Subheading = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-top: 0.5rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 1.3rem;
  }
`

const Hero = ({ heading, subheading, heroImg }) => {
  return (
    <HeroSection>
      <HeroBackground>
        <HeroImg
          fluid={heroImg}
          objectFit="fill"
          alt="yvonne choi on her piano"
        />
      </HeroBackground>
      <TextGroup>
        <Heading>{heading}</Heading>
        <Subheading>{subheading}</Subheading>
      </TextGroup>
      <HeroBorder />
    </HeroSection>
  )
}

export default Hero
