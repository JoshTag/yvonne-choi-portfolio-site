import React from "react"
import { graphql } from "gatsby"

const Biography = ({ data }) => {

  return (
    <div>
      <h1>Biography</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
    </div>
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
