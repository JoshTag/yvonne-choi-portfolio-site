import React from "react"
import { BiographyPageTemplate } from "./../../pages/biography"

const IndexPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()
  console.log(data)
  if (data) {
    return (
      <BiographyPageTemplate
        biography={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
