import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/layout"
import Content, { HTMLContent } from "./../components/bioContent"
import Square from "./../components/square"

import styled from "styled-components"
import { colours, breakpoints } from "./../styles/master"

const BioSection = styled.section`
  position: relative;
  background: ${colours.primary};
  padding: 8rem 2rem;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: 8rem 5rem 10rem;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 10rem;
  }
`

const BioContainer = styled.div`
  position: relative;
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
  top: -2.1rem;
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
        <Square top="-18px" left="-18px" />
        <Square top="-18px" right="-18px" />
        <Square bottom="-18px" left="-18px" />
        <Square bottom="-18px" right="-18px" />
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
    markdownRemark(frontmatter: { templateKey: { eq: "biography-page" } }) {
      html
    }
  }
`

export default Biography
