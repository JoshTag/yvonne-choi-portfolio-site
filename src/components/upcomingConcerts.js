import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Square from "./square"

import styled from "styled-components"
import { colours, breakpoints } from "./../styles/master"
import { getDay, getOrdinal, getMonth, upcomingConcertDates } from "./../utils/"

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

const Card = styled.div`
  background: ${colours.white};
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
  height: 100px;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    height: 75px;
  }

  @media only screen and (min-width: ${breakpoints.tabletLarge}) {
    max-width: 750px;
    margin: 0 auto 1rem;
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 2rem;
    max-width: 850px;
  }
`

const DateContainer = styled.div`
  width: 75px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  display: none;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: block;
    padding-right: 1rem;
    border-right: 1px solid ${colours.brown};
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 1.8rem;
    padding-right: 2rem;
  }
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: 100%;
    padding-left: 2rem;
    flex-direction: row;
    justify-content: space-between;
  }

  & h3 {
    font-size: 1rem;
    font-weight: 600;

    @media only screen and (min-width: ${breakpoints.desktop}) {
      font-size: 1.3rem;
    }
  }

  & > div:nth-child(1) {
    font-weight: 600;
    padding-bottom: 1rem;

    @media only screen and (min-width: ${breakpoints.tablet}) {
      width: 225px;
      border-right: 1px solid ${colours.brown};
      padding-right: 1rem;
    }

    @media only screen and (min-width: ${breakpoints.tabletLarge}) {
      width: 275px;
      font-size: 0.9rem;
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {
      font-size: 1.1rem;
      width: 330px;
    }
  }

  & > div:nth-child(2) {
    @media only screen and (min-width: ${breakpoints.tablet}) {
      text-align: right;
    }

    @media only screen and (min-width: ${breakpoints.tabletLarge}) {
      font-size: 0.9rem;
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {
      font-size: 1rem;
    }
  }
`

const Ordinal = styled.sup`
  font-size: 0.8rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 1rem;
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
        {upcomingConcertDates(concerts).map((v, i) => {
          return (
            <Card key={i}>
              <DateContainer>
                {`${getMonth(v.date, "short")}. `} <br />
                {getDay(v.date)}
                <Ordinal>{getOrdinal(v.date)}</Ordinal>
              </DateContainer>
              <Contents>
                <div>
                  <h3>{v.name}</h3>
                  <div>{v.date}</div>
                </div>
                <div>
                  <div>{v.venue}</div>
                  <div>{v.location}</div>
                </div>
              </Contents>
            </Card>
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
