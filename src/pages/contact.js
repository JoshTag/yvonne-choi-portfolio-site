import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/layout"
import ContactForm from "./../components/contactForm"
import Square from "./../components/square"
import styled from "styled-components"
import { colours, breakpoints } from "./../styles/master"

const ContactSection = styled.section`
  min-height: 100vh;
  background: ${colours.primary};
  padding: 8rem 0 5rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding-top: 10rem;
  }
`

const ContactContainer = styled.div`
  position: relative;
  border-top: 1px solid ${colours.brown};
  width: 320px;
  margin: 0 auto;
  padding-top: 3rem;

  @media only screen and (min-width: ${breakpoints.tabletLarge}) {
    width: 600px;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    width: 900px;
  }
  @media only screen and (min-width: ${breakpoints.desktopLarge}) {
    width: 1000px;
  }
`

const ContactTitle = styled.div`
  position: absolute;
  top: -2rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: ${colours.primary};
  padding: 0 0.5rem;
  z-index: 10;

  & > div {
    border: 2px ${colours.brown} solid;
    padding: 0.25rem 0.25rem;
  }

  & > div > h1 {
    font-size: 1.5rem;
    font-weight: 400;
    border: 1px ${colours.brown} solid;
    padding: 0.5rem 2rem;
  }
`

const ContactContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

const ListsContainer = styled.div`
  @media only screen and (min-width: ${breakpoints.tabletLarge}) {
    display: flex;
    flex-direction: row;
    padding: 2rem 0 3rem;

    & > div {
      width: 50%;
    }
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    width: 700px;
    margin: 0 auto;
  }
`

export const ContactHeaders = styled.h2`
  font-size: 1.2rem;
  padding: 1rem 0 0.5rem;
  font-weight: 600;
`

const List = styled.ul`
  list-style: none;
  padding: 0;

  & li {
    font-size: 0.9rem;
  }
`

export const ContactPageTemplate = ({ specialties, services }) => {
  return (
    <ContactSection>
      <ContactContainer>
        <ContactTitle>
          <div>
            <h1>Contact</h1>
          </div>
        </ContactTitle>
        <Square top="-18px" left="-18px" />
        <Square top="-18px" right="-18px" />
        <ContactContent>
          <ContactForm />
          <ListsContainer>
            <div>
              <ContactHeaders>Services</ContactHeaders>
              <List>
                {services.map(i => (
                  <li key={i.service}>{i.service}</li>
                ))}
              </List>
            </div>
            <div>
              <ContactHeaders>Areas of Specialty</ContactHeaders>
              <List>
                {specialties.map(i => (
                  <li key={i.specialty}>{i.specialty}</li>
                ))}
              </List>
            </div>
          </ListsContainer>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  )
}

const ContactPage = ({ data }) => {
  const { specialties, services } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <ContactPageTemplate specialties={specialties} services={services} />
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        specialties {
          specialty
        }
        services {
          service
        }
      }
    }
  }
`

export default ContactPage
