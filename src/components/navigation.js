import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colours, breakpoints } from "./../styles/master"

const Header = styled.header`
  position: absolute;
  width: 100%;
  height: 60px;
  z-index: 10;
  display: none;
  background: ${({ page }) =>
    page === "Landing" ? "transparent" : colours.black};

  @media only screen and (min-width: ${breakpoints.tabletSmall}) {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    height: 80px;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 88%;
  padding: 0 6%;
  color: ${colours.white};

  @media only screen and (min-width: ${breakpoints.desktop}) {
    max-width: 1240px;
    margin: 0 auto;
  }
`

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  min-width: 400px;
  justify-content: space-between;
  font-size: 0.9rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    min-width: 500px;
    font-size: 1rem;
  }

  & > li > a {
    color: ${colours.white};
    text-decoration: none;
  }
`

const Navigation = ({ page }) => {
  return (
    <Header page={page}>
      <Nav>
        <div>yvonne</div>
        <NavList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/biography">Biography</Link>
          </li>
          <li>
            <Link to="/recordings">Recordings</Link>
          </li>
          <li>
            <Link to="/concerts">Concerts</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </NavList>
      </Nav>
    </Header>
  )
}

export default Navigation
