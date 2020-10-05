import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/layout"
import Square from "./../components/square"
import styled from "styled-components"
import { colours, breakpoints } from "./../styles/master"

const RecordingsSection = styled.section`
  min-height: 100vh;
  background: ${colours.primary};
  padding: 8rem 0 5rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding-top: 10rem;
  }
`

const RecordingsContainer = styled.div`
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

const RecordingsTitle = styled.div`
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

const RecordingCard = styled.div`
  padding: 2rem 0;

  & > h3 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
    font-weight: 600;

    @media only screen and (min-width: ${breakpoints.desktop}){
      font-size: 2rem;
    }
  }
`

export const RecordingsPageTemplate = ({ recordings }) => {
  return (
    <RecordingsSection>
      <RecordingsContainer>
        <Square top="-18px" left="-18px" />
        <Square top="-18px" right="-18px" />
        <RecordingsTitle>
        <div>
          <h1>Recordings</h1>
        </div>
      </RecordingsTitle>
        {recordings.map((item, i) => {
          return (
            <RecordingCard key={i}>
              <h3>{item.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: item.iframe }} />
            </RecordingCard>
          )
        })}
      </RecordingsContainer>
    </RecordingsSection>
  )
}

const Recordings = ({ data }) => {
  const { recordings } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <RecordingsPageTemplate recordings={recordings} />
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "recordings-page" } }) {
      frontmatter {
        recordings {
          iframe
          title
        }
      }
    }
  }
`

export default Recordings
