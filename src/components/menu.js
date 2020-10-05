import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colours } from "./../styles/master"
import { slide as Menu } from "react-burger-menu"

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '26px',
    height: '20px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#fff'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#23201C',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const MenuItem = styled(Link)`
  color: ${colours.white};
  display: flex;
  flex-direction: column;
  text-decoration: none;
`


const Navigation = () => {
  return (
    <Menu right styles={styles}>
      <div>
        <MenuItem className="menu-item" href="/">
          Home
        </MenuItem>
        <MenuItem className="menu-item" href="/biography">
          Biography
        </MenuItem>
        <MenuItem className="menu-item" href="/recordings">
          Recordings
        </MenuItem>
        <MenuItem className="menu-item" href="/concerts">
          Concerts
        </MenuItem>
        <MenuItem className="menu-item" href="/contact">
          Contact
        </MenuItem>
      </div>
    </Menu>
  )
}

export default Navigation
