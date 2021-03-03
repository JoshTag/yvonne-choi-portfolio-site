import React from "react"
import { GalleryPageTemplate } from "../../pages/gallery"

const GalleryPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  const { photos } = data

  if (data) {
    return <GalleryPageTemplate photos={photos} />
  } else {
    return <div>Loading...</div>
  }
}

export default GalleryPagePreview
