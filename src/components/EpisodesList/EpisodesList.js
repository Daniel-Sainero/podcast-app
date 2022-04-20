import React from 'react'
import Parser from 'rss-parser'
import { useState, useEffect } from 'react'

import {
  TitleStyled,
  HeaderStyled,
  EpisodesListWrapperStyled,
  EpisodeStyled,
  TableStyled,
  PodcastsList,
} from './EpisodesList.styled'

const EpisodesListComponent = (props) => {
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

  const dateParser = (date) => {
    var a = new Date(date)
    var year = a.getYear()
    var month = a.getMonth() + 1
    var day = a.getDate()
    var time = day + '/' + month + '/' + year.toString().substring(1)
    return time
  }

  return (
    podcast && (
      <EpisodesListWrapperStyled>
        <TitleStyled>Episodes: {podcast?.items.length}</TitleStyled>
        <TableStyled>
          <HeaderStyled>
            <p className='title'>Title</p>
            <p className='date'>Date</p>
            <p className='duration'>Duration</p>
          </HeaderStyled>
          <PodcastsList>
            {podcast?.items.map((item, i) => (
              <EpisodeStyled
                key={i}
                style={{ backgroundColor: i % 2 ? 'white' : '#f6f6f6' }}
              >
                <p className='title'>{item.title}</p>
                <p className='date'>{dateParser(item.pubDate)} </p>
                <p className='duration'> {item.itunes.duration}</p>
              </EpisodeStyled>
            ))}
          </PodcastsList>
        </TableStyled>
      </EpisodesListWrapperStyled>
    )
  )
}

export default EpisodesListComponent
