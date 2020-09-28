import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/layout"
import ConcertCard from "./../components/concertCard"
import styled from "styled-components"
import { colours, breakpoints } from "./../styles/master"

const ConcertSection = styled.section`
  min-height: 100vh;
  background: ${colours.primary};
  padding: 5rem 0 5rem;
`

const ConcertContainer = styled.div`
  position: relative;
  border-top: 1px solid ${colours.brown};
  width: 320px;
  margin: 0 auto;
  padding-top: 3rem;

  @media only screen and (min-width: ${breakpoints.tabletLarge}) {
    width: 600px;
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

  & h2 {
    font-weight: 400;
    font-size: 1.25rem;
    padding-bottom: 1.5rem;

    @media only screen and (min-width: ${breakpoints.desktop}) {
      font-size: 1.5rem;
    }
  }

  & > div {
    @media only screen and (min-width: ${breakpoints.tabletLarge}) {
      display: grid;
      grid-template-columns: 280px 280px;
      justify-content: space-between;
      align-content: space-between;
      row-gap: 1rem;
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: 280px 280px 280px;
      row-gap: 1.5rem;
    }

    @media only screen and (min-width: ${breakpoints.desktopLarge}) {
      grid-template-columns: 310px 310px 310px;
    }
  }
`

export const ConcertPageTemplate = ({ concerts }) => {
  return (
    <ConcertSection>
      <ConcertContainer>
        <ConcertTitle>
          <div>
            <h1>Concerts</h1>
          </div>
        </ConcertTitle>
        {concerts.map(item => {
          return (
            <ConcertMonth key={item.month}>
              <h2>{item.month}</h2>
              <div>
                {item.concert.map((v, i) => {
                  return <ConcertCard key={i} concertInfo={v} />
                })}
              </div>
            </ConcertMonth>
          )
        })}
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
    markdownRemark(frontmatter: { title: { eq: "Concerts" } }) {
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
