import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Square from "../components/square"
import styled from "styled-components"
import { colours, breakpoints } from "../styles/master"

const RecordingsSection = styled.section`
  min-height: 100vh;
  background: ${colours.primary};
  padding: 8rem 0 5rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding-top: 10rem;
  }
`

const RecordingsContainer = styled.div`
  position: relative;
  border-top: 1px solid ${colours.brown};
  width: 320px;
  margin: 0 auto;
  padding-top: 3rem;

  @media only screen and (min-width: ${breakpoints.tabletLarge}) {
    width: 600px;
  }
  @media only screen and (min-width: ${breakpoints.desktop}) {
    width: 900px;
  }
  @media only screen and (min-width: ${breakpoints.desktopLarge}) {
    width: 1000px;
  }

  & h2 {
    font-size: 1.75rem;
    padding: 1.5rem 0;
    font-weight: 600;
  }
`

const RecordingsTitle = styled.div`
  position: absolute;
  top: -2rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: ${colours.primary};
  padding: 0 0.5rem;
  z-index: 10;

  & > div {
    border: 2px ${colours.brown} solid;
    padding: 0.25rem 0.25rem;
  }

  & > div > h1 {
    font-size: 1.5rem;
    font-weight: 400;
    border: 1px ${colours.brown} solid;
    padding: 0.5rem 2rem;
  }
`

const AudioWrapper = styled.div``

const RecordingCard = styled.div`
  padding: 1rem 0;

  & > h3 {
    font-size: 1.25rem;
    padding-bottom: 1rem;
    font-weight: 400;
  }
`

const VideoWrapper = styled.div`
  & > h3 {
    font-weight: 600;
    font-size: 1.5rem;
    padding: 1rem 0 0;
  }
`

const VideoCard = styled.div`
  padding: 1rem 0;

  & > h4 {
    font-size: 1.25rem;
    padding-bottom: 1rem;
    font-weight: 400;
  }
`

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const RecordingsPageTemplate = ({ audio, solo, colab }) => {
  return (
    <RecordingsSection>
      <RecordingsContainer>
        <Square top="-18px" left="-18px" />
        <Square top="-18px" right="-18px" />
        <RecordingsTitle>
          <div>
            <h1>Recordings</h1>
          </div>
        </RecordingsTitle>
        <AudioWrapper>
          <h2>Audio</h2>
          {audio.map((item, i) => {
            return (
              <RecordingCard key={i}>
                <h3>{item.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: item.iframe }} />
              </RecordingCard>
            )
          })}
        </AudioWrapper>
        <VideoWrapper>
          <h2>Videos</h2>
          <h3>Solo</h3>
          {solo.map((item, i) => {
            return (
              <VideoCard>
                <h4>{item.title}</h4>
                <VideoContainer>
                  <iframe
                    title={item.title}
                    src={item.link}
                    frameborder="0"
                    allowfullscreen
                    class="video"
                  ></iframe>
                </VideoContainer>
              </VideoCard>
            )
          })}
          <h3>Colab</h3>
          {colab.map((item, i) => {
            return (
              <VideoCard>
                <h4>{item.title}</h4>
                <VideoContainer>
                  <iframe
                    title={item.title}
                    src={item.link}
                    frameborder="0"
                    allowfullscreen
                    class="video"
                  ></iframe>
                </VideoContainer>
              </VideoCard>
            )
          })}
        </VideoWrapper>
      </RecordingsContainer>
    </RecordingsSection>
  )
}

const Recordings = ({ data }) => {
  const { audio, solo, colab } = data.markdownRemark.frontmatter

  console.log(solo, colab)

  return (
    <Layout>
      <RecordingsPageTemplate audio={audio} solo={solo} colab={colab} />
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "recordings-page" } }) {
      frontmatter {
        audio {
          iframe
          title
        }
        solo {
          title
          link
        }
        colab {
          title
          link
        }
      }
    }
  }
`

export default Recordings
