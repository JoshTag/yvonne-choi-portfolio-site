import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/layout"
import Content, { HTMLContent } from "./../components/bioContent"

import styled from "styled-components"
import { colours, breakpoints } from "./../styles/master"

const BioSection = styled.section`
  position: relative;
  background: ${colours.primary};
  padding: 5rem 2rem;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: 4rem 5rem 2rem;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

const BioContainer = styled.div`
  border: 1px solid ${colours.brown};
  padding: 4rem 1.5rem 2rem;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: 4rem 3.5rem 2rem;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 4rem 6rem 2rem;
    max-width: 800px;
  }
`

const BioTitle = styled.div`
  position: absolute;
  top: 3rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: ${colours.primary};
  padding: 0 0.5rem;
  z-index: 10;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    top: 2.1rem;
  }

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

export const BiographyPageTemplate = ({ contentComponent, biography }) => {
  const PageContent = contentComponent || Content

  return (
    <BioSection>
      <BioContainer>
        <BioTitle>
          <div>
            <h1>Biography</h1>
          </div>
        </BioTitle>
        <PageContent content={biography} />
      </BioContainer>
    </BioSection>
  )
}

const Biography = ({ data }) => {
  const biography = data.markdownRemark.html

  return (
    <Layout>
      <BiographyPageTemplate
        biography={biography}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { title: { eq: "Biography" } }) {
      html
    }
  }
`

export default Biography
