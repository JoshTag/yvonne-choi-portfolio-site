import React from "react"
import "../styles/styles.scss"

const Layout = ({ children }) => {
  return (
    <div>
      {/* <header>Header</header> */}
      <main>{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  )
}

export default Layout