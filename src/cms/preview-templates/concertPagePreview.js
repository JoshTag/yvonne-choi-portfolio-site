import React from "react"
import { ConcertPageTemplate } from "./../../pages/concerts"

const ConcertPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  console.log(data)

  if (data) {
    return <ConcertPageTemplate concerts={data.concerts} />
  } else {
    return <div>Loading...</div>
  }
}

export default ConcertPagePreview
