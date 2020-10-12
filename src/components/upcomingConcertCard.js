import React from "react"
import styled from "styled-components"
import { colours, breakpoints } from "./../styles/master"
import { getDay, getOrdinal, getMonth, formatTime } from "./../utils/"

const Card = styled.div`
  background: ${colours.white};
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
  height: 100px;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    height: 75px;
  }

  @media only screen and (min-width: ${breakpoints.tabletLarge}) {
    max-width: 750px;
    margin: 0 auto 1rem;
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 2rem;
    max-width: 850px;
  }
`

const DateContainer = styled.div`
  width: 75px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  display: none;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: block;
    padding-right: 1rem;
    border-right: 1px solid ${colours.brown};
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 1.8rem;
    padding-right: 2rem;
  }
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: 100%;
    padding-left: 2rem;
    flex-direction: row;
    justify-content: space-between;
  }

  & h3 {
    font-size: 1rem;
    font-weight: 600;

    @media only screen and (min-width: ${breakpoints.desktop}) {
      font-size: 1.3rem;
    }
  }

  & > div:nth-child(1) {
    font-weight: 600;
    padding-bottom: 1rem;

    @media only screen and (min-width: ${breakpoints.tablet}) {
      width: 225px;
      border-right: 1px solid ${colours.brown};
      padding-right: 1rem;
    }

    @media only screen and (min-width: ${breakpoints.tabletLarge}) {
      width: 275px;
      font-size: 0.9rem;
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {
      font-size: 1.1rem;
      width: 330px;
    }
  }

  & > div:nth-child(2) {
    @media only screen and (min-width: ${breakpoints.tablet}) {
      text-align: right;
    }

    @media only screen and (min-width: ${breakpoints.tabletLarge}) {
      font-size: 0.9rem;
    }

    @media only screen and (min-width: ${breakpoints.desktop}) {
      font-size: 1rem;
    }
  }
`

const Ordinal = styled.sup`
  font-size: 0.8rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 1rem;
  }
`

const UpcomingConcertCard = ({ concert, index }) => {
  return (
    <Card key={index}>
      <DateContainer>
        {`${getMonth(concert.date, "short")}. `} <br />
        {getDay(concert.date)}
        <Ordinal>{getOrdinal(concert.date)}</Ordinal>
      </DateContainer>
      <Contents>
        <div>
          <h3>{concert.name}</h3>
          <div>
            {getMonth(concert.date, "long")} {getDay(concert.date)}
            <Ordinal>{getOrdinal(concert.date)}</Ordinal> @{" "}
            {formatTime(concert.date)}
          </div>
        </div>
        <div>
          <div>{concert.venue}</div>
          <div>{concert.location}</div>
        </div>
      </Contents>
    </Card>
  )
}

export default UpcomingConcertCard
