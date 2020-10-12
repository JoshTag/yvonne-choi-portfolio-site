import React from "react"
import styled from "styled-components"
import { colours, breakpoints } from "./../styles/master"
import { getDay, getOrdinal, getMonth, formatTime } from "./../utils/"

const Card = styled.div`
  background: ${colours.white};
  margin-bottom: 1rem;
  padding: 1rem;

  @media only screen and (min-width: ${breakpoints.tabletLarge}) {
    margin-bottom: 0;
  }

  & * {
    padding-bottom: 0.25rem;
  }

  & h3 {
    font-size: 1rem;
    font-weight: 600;

    @media only screen and (min-width: ${breakpoints.desktop}) {
      font-size: 1.25rem;
    }
  }

  & div:nth-child(2) {
    font-size: 0.8rem;
    font-weight: 600;
    padding-bottom: 1rem;

    @media only screen and (min-width: ${breakpoints.desktop}) {
      font-size: 1rem;
    }
  }

  & div {
    font-size: 0.8rem;

    @media only screen and (min-width: ${breakpoints.desktopLarge}) {
      font-size: 0.9rem;
    }
  }
`

const Ordinal = styled.sup`
  font-size: 0.5rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 0.8rem;
  }
`

const ConcertCard = ({ concertInfo }) => {
  return (
    <Card>
      <h4>{concertInfo.name}</h4>
      <div>
        {getMonth(concertInfo.date, "long")} {getDay(concertInfo.date)}
        <Ordinal>{getOrdinal(concertInfo.date)}</Ordinal> @{" "}
        {formatTime(concertInfo.date)}
      </div>
      <div>{concertInfo.venue}</div>
      <div>{concertInfo.location}</div>
    </Card>
  )
}

export default ConcertCard
