import React from "react"
import styled from "styled-components"
import { colours } from "./../styles/styles"
import { Link } from "gatsby"

const MiniBioContainer = styled.section`
  position: relative;
  background-color: ${colours.black};
`

const MiniBioBoarder = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 85%;
  border: solid ${colours.white} 1px;
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
  z-index: 100;
`

const TitleBorder = styled.div`
  border: 2px ${colours.white} solid;
  padding: 0.25rem 0.25rem;
`

const MiniBioTitle = styled.h2`
  color: ${colours.white};
  font-size: 1.5rem;
  font-weight: 400;
  border: 1px ${colours.white} solid;
  padding: 0.5rem 2rem;
`

const AboutContents = styled.div`
  color: ${colours.white};
  padding: 25% 15% 20%;
`

const BioParagraph = styled.p`
  font-size: 0.75rem;
  line-height: 2;
  margin-bottom: 1.5rem;
`

const BioLink = styled(Link)`
  text-decoration: none;
  color: ${colours.white};
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
      <MiniBioBoarder />
    </MiniBioContainer>
  )
}

export default MiniBio
