import React from 'react'
import Parser from 'rss-parser'
import {
  LogoWrapperStyled,
  InfoStyled,
  TitleStyled,
  AuthorStyled,
  DescriptionStyled,
} from './EpisodesInfo.styled'
import { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'

const EpisodesInfoComponent = (props) => {
  const CORS_PROXY = 'https://api.allorigins.win/raw?url='
  const [podcast, setPodcast] = useState(null)

  useEffect(() => {
    let parser = new Parser()

    const fetchData = async () => {
      const feed = await parser.parseURL(CORS_PROXY + props.feedUrl)
      setPodcast(feed)
    }
    fetchData()
  }, [props.feedUrl])

  return (
    podcast && (
    <InfoStyled>
      <LogoWrapperStyled>
        <img alt='podcast logo' src={podcast?.image?.url} />
      </LogoWrapperStyled>
      <TitleStyled>{podcast?.title}</TitleStyled>
      <AuthorStyled> by {podcast?.itunes?.author}</AuthorStyled>
      <DescriptionStyled>
        <span>Description:</span>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(podcast?.description),
          }}
        ></div>
      </DescriptionStyled>
    </InfoStyled>
    )
  )
}

export default EpisodesInfoComponent
