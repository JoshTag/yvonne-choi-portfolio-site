import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Menu from "./menu"
import Navigation from "./navigation"
import "../styles/styles.scss"

const Layout = ({ page, children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `)

  const siteMetadata = data.site.siteMetadata
  const { title, description, keywords } = siteMetadata

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <html lang="en" />
        <title>{title}</title>
      </Helmet>
      <div className="burger-menu">
        <Menu />
      </div>
      <Navigation page={page} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
