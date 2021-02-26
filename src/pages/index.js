import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { colours } from "./../styles/master"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Testimonials from "../components/testimonials"
import MiniBio from "../components/miniBio"

const Footer = styled.footer`
  background: ${colours.black};
  color: ${colours.white};
  height: 100px;
  display: grid;
  place-items: center
`

export const IndexPageTemplate = ({
  heading,
  subheading,
  testimonials,
  about,
  heroImg
}) => {
  return (
    <>
      <Hero heading={heading} subheading={subheading} heroImg={heroImg} />
      <MiniBio about={about} />
      <Testimonials testimonials={testimonials} />
      <Footer><small>Copyright 2021, Yvonne Choi</small></Footer>
    </>
  )
}

const IndexPage = ({ data }) => {
  const {
    heading,
    subheading,
    testimonials,
    about,
    title,
  } = data.index.frontmatter
  const heroImg = data.heroImg.childImageSharp.fluid


  return (
    <Layout page={title}>
      <IndexPageTemplate
        heading={heading}
        subheading={subheading}
        testimonials={testimonials}
        about={about}
        heroImg={heroImg}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    index: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        subheading
        about
        title
        testimonials {
          author
          position
          quote
        }
      }
    }
    heroImg: file(relativePath:{ eq: "hero-img.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
