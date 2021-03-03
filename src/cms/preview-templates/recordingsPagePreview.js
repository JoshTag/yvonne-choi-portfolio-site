import React from "react"
import { RecordingsPageTemplate } from "../../pages/recordings"

const RecordingsPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  const { audio, solo, colab } = data

  if (data) {
    return <RecordingsPageTemplate audio={audio} solo={solo} colab={colab} />
  } else {
    return <div>Loading...</div>
  }
}

export default RecordingsPagePreview
