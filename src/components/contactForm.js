import React from "react"

import styled from "styled-components"
import { colours } from "./../styles/master"
import { ContactHeaders } from "./../pages/contact"

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const Input = styled.input`
  height: 30px;
  border: none;
  background: ${colours.white};
  padding: 0 0.5rem;
  margin-top: 0.5rem;
`

const TextArea = styled.textarea`
  height: 200px;
  border: none;
  background: ${colours.white};
  padding: 0.5rem;
  margin-top: 0.5rem;
  resize: vertical;
`

const SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid ${colours.brown};
  background: ${colours.primary};
  color: ${colours.brown};
  font-family: "Playfair Display", serif;
  font-size: 1rem;
`

const ContactForm = () => {
  return (
    <div>
      <ContactHeaders>Get In Touch</ContactHeaders>
      <form name="contact" method="POST" data-netlify="true" id="contact-form">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <Label>
            Full Name *
            <Input
              name="contact-name"
              placeholder="Enter Full Name"
              required
              maxLength="64"
            />
          </Label>
        </div>
        <div>
          <Label>
            Email *
            <Input
              type="email"
              name="contact-email"
              placeholder="Enter Email"
              required
              maxLength="64"
            />
          </Label>
        </div>
        <Label>
          Message *
          <TextArea
            name="contact-message"
            placeholder="Enter Message"
            maxLength="2000"
            required
          ></TextArea>
        </Label>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </div>
  )
}

export default ContactForm
