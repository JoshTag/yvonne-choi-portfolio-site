import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {

  if (!data) {
    return null
  }
  const { heading, subheading, testimonials } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <h1>{heading}</h1>
      <p>{subheading}</p>
      {testimonials.map(item => {
        return (
          <div>
            <p>{item.quote}</p>
            <p>{item.author}</p>
            <p>{item.position}</p>
          </div>
        )
      })}
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
