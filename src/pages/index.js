import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Testimonials from "../components/testimonials"
import MiniBio from "../components/miniBio"
import UpcomingConcerts from "../components/upcomingConcerts.js"

export const IndexPageTemplate = ({
  heading,
  subheading,
  testimonials,
  about,
}) => {
  return (
    <>
      <Hero heading={heading} subheading={subheading} />
      <Testimonials testimonials={testimonials} />
      <MiniBio about={about} />
      <UpcomingConcerts />
    </>
  )
}

const IndexPage = ({ data }) => {
  const {
    heading,
    subheading,
    testimonials,
    about,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <IndexPageTemplate
        heading={heading}
        subheading={subheading}
        testimonials={testimonials}
        about={about}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        subheading
        about
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
