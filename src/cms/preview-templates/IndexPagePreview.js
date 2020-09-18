import React from "react"
import { IndexPageTemplate } from "./../../pages/index"

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  if (data) {
    return (
      <IndexPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        testimonials={data.testimonials}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
