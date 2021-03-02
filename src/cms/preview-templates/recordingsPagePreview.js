import React from "react"
import { RecordingsPageTemplate } from "../../pages/recordings"

const RecordingsPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return <RecordingsPageTemplate audio={data.audio} />
  } else {
    return <div>Loading...</div>
  }
}

export default RecordingsPagePreview
