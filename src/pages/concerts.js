import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/layout"
import ConcertCard from "./../components/concertCard"
import UpcomingConcertCard from "./../components/upcomingConcertCard"
import Square from "./../components/square"
import styled from "styled-components"
import { colours, breakpoints } from "./../styles/master"
import { upcomingConcertDates } from "./../utils/"

const ConcertSection = styled.section`
  min-height: 100vh;
  background: ${colours.primary};
  padding: 8rem 0 5rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding-top: 10rem;
  }
`

const ConcertContainer = styled.div`
  position: relative;
  border-top: 1px solid ${colours.brown};
  width: 320px;
  margin: 0 auto;
  padding-top: 3rem;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: 650px;
  }
  @media only screen and (min-width: ${breakpoints.tabletLarge}) {
    width: 700px;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    width: 900px;
  }
  @media only screen and (min-width: ${breakpoints.desktopLarge}) {
    width: 1000px;
  }
`

const ConcertTitle = styled.div`
  position: absolute;
  top: -2rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: ${colours.primary};
  padding: 0 0.5rem;
  z-index: 10;

  & > div {
    border: 2px ${colours.brown} solid;
    padding: 0.25rem 0.25rem;
  }

  & > div > h1 {
    font-size: 1.5rem;
    font-weight: 400;
    border: 1px ${colours.brown} solid;
    padding: 0.5rem 2rem;
  }
`

const ConcertMonth = styled.div`
  padding-top: 2rem;
  width: 100%;

  & > h3 {
    font-weight: 400;
    font-size: 1rem;
    padding-bottom: 1.5rem;

    @media only screen and (min-width: ${breakpoints.desktop}) {
      font-size: 1.25rem;
    }
  }

  & > div {
    @media only screen and (min-width: ${breakpoints.tabletLarge}) {
      display: grid;
      grid-template-columns: 280px 280px;
      justify-content: space-between;
      align-content: space-between;
      row-gap: 1rem;
      width: 600px;
      margin: 0 auto;
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: 280px 280px 280px;
      row-gap: 1.5rem;
      width: auto;
    }

    @media only screen and (min-width: ${breakpoints.desktopLarge}) {
      grid-template-columns: 310px 310px 310px;
    }
  }
`

const SubHeader = styled.h2`
  font-weight: 400;
  font-size: 1.25rem;
  padding-bottom: 1.5rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 1.5rem;
  }
`

const SubHeaderNoPadding = styled.h2`
  font-weight: 400;
  font-size: 1.25rem;
  padding-top: 1.5rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 1.5rem;
  }
`

export const ConcertPageTemplate = ({ concerts }) => {
  // Dummy concert created to avoid GraphQL null Error
  const filterDummy = concerts.filter(
    item => item.month !== "Dummy Month Do Not Delete"
  )
  return (
    <ConcertSection>
      <ConcertContainer>
        <ConcertTitle>
          <div>
            <h1>Concerts</h1>
          </div>
        </ConcertTitle>
        <Square top="-18px" left="-18px" />
        <Square top="-18px" right="-18px" />
        {upcomingConcertDates(concerts).length < 2 ? <h4>No Concerts Upcoming</h4> : (
          <>
            <SubHeader>Upcoming Concerts</SubHeader>
            {upcomingConcertDates(filterDummy).map((concert, i) => {
              return (
                <UpcomingConcertCard
                  key={`${i}-upcoming`}
                  concert={concert}
                  index={i}
                />
              )
            })}
            <SubHeaderNoPadding>All Concerts</SubHeaderNoPadding>
            {filterDummy.map(item => {
              return (
                <ConcertMonth key={item.month}>
                  <h3>{item.month}</h3>
                  <div>
                    {item.concert.map((v, i) => {
                      return <ConcertCard key={i} concertInfo={v} />
                    })}
                  </div>
                </ConcertMonth>
              )
            })}
          </>
        )}
      </ConcertContainer>
    </ConcertSection>
  )
}

const Concerts = ({ data }) => {
  const { concerts } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <ConcertPageTemplate concerts={concerts} />
    </Layout>
  )
}

export default Concerts

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "concerts-page" } }) {
      frontmatter {
        title
        concerts {
          month
          concert {
            date
            location
            name
            venue
          }
        }
      }
    }
  }
`
