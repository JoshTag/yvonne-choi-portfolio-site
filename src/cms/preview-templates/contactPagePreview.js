import React from "react"
import { ContactPageTemplate } from "./../../pages/contact"

const ContactPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  if (data) {
    return (
      <ContactPageTemplate
        specialties={data.specialties}
        services={data.services}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ContactPagePreview
