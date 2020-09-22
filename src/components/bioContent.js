import React from "react"
import styled from "styled-components"
import { breakpoints } from "./../styles/master"

const Contents = styled.div`
  font-size: 14px;
  line-height: 1.8;

  @media only screen and (min-width: ${breakpoints.tablet}){
    font-size: 1rem;
    line-height: 2;
  }

  & * {
    width: 100%;
  }

  & p {
    margin-bottom: 1rem;
  }
`

export const HTMLContent = ({ content }) => (
  <Contents dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content }) => <Contents>{content}</Contents>

export default Content
