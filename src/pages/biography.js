import React from "react"

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
