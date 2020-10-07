import React from "react"
import Menu from "./menu"
import Navigation from "./navigation"
import "../styles/styles.scss"

const Layout = ({ page, children }) => {
  return (
    <div>
      <div className="burger-menu">
        <Menu />
      </div>
      <Navigation page={page} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
