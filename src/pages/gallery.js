import React from "react"
import { graphql } from "gatsby"
import GalleryCarousel from "../components/galleryCarousel"
import Layout from "../components/layout"
import Square from "../components/square"
import styled from "styled-components"
import { colours, breakpoints } from "../styles/master"

const GallerySection = styled.section`
  min-height: 100vh;
  background: ${colours.primary};
  padding: 8rem 0 5rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding-top: 10rem;
  }
`

const GalleryContainer = styled.div`
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

const GalleryTitle = styled.div`
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

export const GalleryPageTemplate = ({ photos }) => {
  return (
    <GallerySection>
      <GalleryContainer>
        <Square top="-18px" left="-18px" />
        <Square top="-18px" right="-18px" />
        <GalleryTitle>
          <div>
            <h1>Gallery</h1>
          </div>
        </GalleryTitle>
        <GalleryCarousel photos={photos} />
      </GalleryContainer>
    </GallerySection>
  )
}

const Gallery = ({ data }) => {
  const { photos } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <GalleryPageTemplate photos={photos} />
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "gallery-page" } }) {
      frontmatter {
        photos {
          image
        }
      }
    }
  }
`

export default Gallery
