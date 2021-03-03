import React from "react"
import styled from "styled-components"
import { colours, breakpoints } from "../styles/master"
import Square from "./square"
import { Link } from "gatsby"

const MiniBioContainer = styled.section`
  position: relative;
  background-color: ${colours.black};

  @media only screen and (min-width: ${breakpoints.desktop}) {
    :after {
      content: " ";
      position: absolute;
      width: 100%;
      height: 1rem;
      background-color: ${colours.black};
    }
  }
`

const MiniBioBoarder = styled.div`
  position: absolute;
  top: 15%;
  left: 5%;
  width: 90%;
  height: 75%;
  border: solid ${colours.primary} 1px;

  @media only screen and (min-width: ${breakpoints.tabletSmall}) {
    left: 6%;
    width: 88%;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    top: 20%;
    left: 6%;
    width: 88%;
    height: 70%;
  }
`

const TitleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 5%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: ${colours.black};
  padding: 0 0.5rem;
  z-index: 10;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    top: 12%;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    top: 10%;
  }
`

const TitleBorder = styled.div`
  border: 2px ${colours.primary} solid;
  padding: 0.25rem 0.25rem;
`

const MiniBioTitle = styled.h2`
  color: ${colours.primary};
  font-size: 1.5rem;
  font-weight: 400;
  border: 1px ${colours.primary} solid;
  padding: 0.5rem 2rem;
  width: 105px;
  text-align: center;
`

const AboutContents = styled.div`
  color: ${colours.primary};
  padding: 100px 15% 20%;

  @media only screen and (min-width: ${breakpoints.tabletSmall}) {
    padding: 11rem 6rem 8rem;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 10rem 12rem 8rem;
  }
`

const BioParagraph = styled.p`
  font-size: 0.75rem;
  line-height: 2.5;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${breakpoints.tabletSmall}) {
    font-size: 0.85rem;
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 1rem;
    line-height: 2;
    max-width: 1024px;
    margin: 0 auto 2rem;
  }
`

const BioLink = styled(Link)`
  text-decoration: none;
  color: ${colours.primary};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 1rem;
  -webkit-letter-spacing: 0.1rem;
  -moz-letter-spacing: 0.1rem;
  -ms-letter-spacing: 0.1rem;
  letter-spacing: 0.1rem;
  z-index: 100;
`

const MiniBio = ({ about }) => {
  return (
    <MiniBioContainer>
      <TitleContainer>
        <TitleBorder>
          <MiniBioTitle>About Me</MiniBioTitle>
        </TitleBorder>
      </TitleContainer>
      <AboutContents>
        <BioParagraph>{about}</BioParagraph>
        <BioLink to="/biography/">Read Full Bio</BioLink>
      </AboutContents>
      <MiniBioBoarder>
        <Square colourBackground={colours.black} colourBorder={colours.primary} top="-18px" left="-18px" />
        <Square colourBackground={colours.black} colourBorder={colours.primary} top="-18px" right="-18px" />
        <Square colourBackground={colours.black} colourBorder={colours.primary} bottom="-18px" left="-18px" />
        <Square colourBackground={colours.black} colourBorder={colours.primary} bottom="-18px" right="-18px" />
      </MiniBioBoarder>
    </MiniBioContainer>
  )
}

export default MiniBio
