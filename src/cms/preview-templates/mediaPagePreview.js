import React from "react"
import { MediaPageTemplate } from "./../../pages/media"

const MediaPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return <MediaPageTemplate audio={data.audio} />
  } else {
    return <div>Loading...</div>
  }
}

export default MediaPagePreview
