import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Testimonials from "../components/testimonials"

import Carousel from "../components/carousel"

export const IndexPageTemplate = ({ heading, subheading, testimonials }) => {
  return (
    <>
      <Hero 
        heading={heading}
        subheading={subheading}
      />
      <Testimonials testimonials={testimonials}/>
      <Carousel />
    </>
  )
}

const IndexPage = ({ data }) => {
  const { heading, subheading, testimonials } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <IndexPageTemplate
        heading={heading}
        subheading={subheading}
        testimonials={testimonials}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { title: { eq: "Index" } }) {
      frontmatter {
        heading
        subheading
        testimonials {
          author
          position
          quote
        }
      }
    }
  }
`

export default IndexPage
