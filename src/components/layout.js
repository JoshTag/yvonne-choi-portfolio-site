import React from "react"
import Menu from "./menu"
import Navigation from "./navigation"
import "../styles/styles.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <div className="burger-menu">
        <Menu />
      </div>
      <Navigation />
      {/* <header>Header</header> */}
      <main>{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  )
}

export default Layout
