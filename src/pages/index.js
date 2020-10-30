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
  concerts,
}) => {
  return (
    <>
      <Hero heading={heading} subheading={subheading} />
      <Testimonials testimonials={testimonials} />
      <MiniBio about={about} />
      {concerts && <UpcomingConcerts concerts={concerts}/>}
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

  return (
    <Layout page={title}>
      <IndexPageTemplate
        heading={heading}
        subheading={subheading}
        testimonials={testimonials}
        about={about}
        concerts={data.concerts.frontmatter.concerts}
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
    concerts: markdownRemark(
      frontmatter: { templateKey: { eq: "concerts-page" } }
    ) {
      frontmatter {
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

export default IndexPage
