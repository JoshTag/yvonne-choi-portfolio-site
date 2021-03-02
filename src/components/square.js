import React from "react"
import styled from "styled-components"
import { colours } from "../styles/master"

const BorderSquare = styled.div`
  display: none;

  @media only screen and (min-width: 375px) {
    position: absolute;
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    right: ${props => props.right};
    height: 20px;
    width: 20px;
    display: grid;
    place-items: center;
    background: ${props => props.colourBackground || colours.primary};
    padding: 8px;

    &:before {
      content: " ";
      position: absolute;
      height: 12px;
      width: 12px;
      border: solid 1px ${props => props.colourBorder || colours.brown};
    }

    & > div {
      height: 100%;
      width: 100%;
      border: solid 2px ${props => props.colourBorder || colours.brown};
    }
  }
`

const Square = ({
  top,
  bottom,
  left,
  right,
  colourBackground,
  colourBorder,
}) => {
  return (
    <BorderSquare
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      colourBackground={colourBackground}
      colourBorder={colourBorder}
    >
      <div />
    </BorderSquare>
  )
}

export default Square
