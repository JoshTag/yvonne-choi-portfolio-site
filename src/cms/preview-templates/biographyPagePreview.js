import React from "react"
import { BiographyPageTemplate } from "./../../pages/biography"

const BiographyPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return <BiographyPageTemplate biography={widgetFor("body")} />
  } else {
    return <div>Loading...</div>
  }
}

export default BiographyPagePreview
