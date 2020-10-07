import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Square from "./square"
import UpcomingConcertCard from "./upcomingConcertCard"


import styled from "styled-components"
import { colours, breakpoints } from "./../styles/master"
import { upcomingConcertDates } from "./../utils/"

const UpcomingConcertsSection = styled.section`
  background: ${colours.primary};
  padding: 5rem 0;

  @media only screen and (min-width: ${breakpoints.tabletLarge}) {
    padding: 5rem 0 8rem;
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 12rem 0;
  }
`

const UpcomingConcertContainer = styled.div`
  position: relative;
  width: 88%;
  margin: 0 6%;
  padding-top: 4rem;
  border-top: 1px solid ${colours.brown};
`

const TitleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: -2rem;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: ${colours.primary};
  padding: 0 0.5rem;
  z-index: 10;

  @media only screen and (min-width: ${breakpoints.tabletSmall}) {
    top: -2rem;
  }

  & div {
    border: 2px ${colours.brown} solid;
    padding: 0.25rem 0.25rem;
  }

  & h2 {
    color: ${colours.brown};
    font-size: 1.5rem;
    font-weight: 400;
    border: 1px ${colours.brown} solid;
    padding: 0.5rem 2rem;
    white-space: nowrap;
  }
`

const ConcertLink = styled.a`
  color: ${colours.brown};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  -webkit-letter-spacing: 0.1rem;
  -moz-letter-spacing: 0.1rem;
  -ms-letter-spacing: 0.1rem;
  letter-spacing: 0.1rem;
  padding-top: 2rem;
`

const UpcomingConcerts = ({ data }) => {
  const { concerts } = data.markdownRemark.frontmatter

  return (
    <UpcomingConcertsSection>
      <UpcomingConcertContainer>
        <TitleContainer>
          <div>
            <h2>Upcoming Concerts</h2>
          </div>
        </TitleContainer>
        {upcomingConcertDates(concerts).map((concert, i) => {
          return (
            <UpcomingConcertCard concert={concert} index={i} />
          )
        })}
        <Square top="-18px" left="-17px"/>
        <Square top="-18px" right="-17px"/>
      </UpcomingConcertContainer>
      <ConcertLink href="/concerts">View All Concerts</ConcertLink>
    </UpcomingConcertsSection>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(frontmatter: { title: { eq: "Concerts" } }) {
          frontmatter {
            concerts {
              month
              concert {
                date
                location
                venue
                name
              }
            }
          }
        }
      }
    `}
    render={data => <UpcomingConcerts data={data} />}
  ></StaticQuery>
)
