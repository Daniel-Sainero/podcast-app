import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  TitleStyled,
  HeaderStyled,
  EpisodesListWrapperStyled,
  EpisodeStyled,
  TableStyled,
  PodcastsList,
} from './EpisodesList.styled'

const EpisodesListComponent = (props) => {
  const navigate = useNavigate()
  const params = useParams()

  const dateParser = (date) => {
    var a = new Date(date)
    var year = a.getYear()
    var month = a.getMonth() + 1
    var day = a.getDate()
    var time = day + '/' + month + '/' + year.toString().substring(1)
    return time
  }

  const goToDetails = (item) => {
    localStorage.setItem('podcast', JSON.stringify(item))
    navigate(`/podcast/${params.podcastId}/episode/${item.guid}`)
  }
  return (
    <>
      {props.podcast && (
        <EpisodesListWrapperStyled>
          <TitleStyled>Episodes: {props.podcast?.items.length}</TitleStyled>
          <TableStyled>
            <HeaderStyled>
              <p className='title'>Title</p>
              <p className='date'>Date</p>
              <p className='duration'>Duration</p>
            </HeaderStyled>
            <PodcastsList>
              {props.podcast?.items.map((item, i) => (
                <EpisodeStyled
                  key={i}
                  style={{ backgroundColor: i % 2 ? 'white' : '#f6f6f6' }}
                >
                  <p className='title' onClick={() => goToDetails(item)}>
                    {item.title}
                  </p>
                  <p className='date'>{dateParser(item.pubDate)} </p>
                  {item.itunes.duration ? (
                    <p className='duration'>
                      {item.itunes.duration.includes(':')
                        ? item.itunes.duration
                        : new Date(item.itunes.duration * 1000)
                            .toUTCString()
                            .match(/(\d\d:\d\d:\d\d)/)[0]}
                    </p>
                  ) : (
                    <p className='duration'>01:22</p>
                  )}
                </EpisodeStyled>
              ))}
            </PodcastsList>
          </TableStyled>
        </EpisodesListWrapperStyled>
      )}
    </>
  )
}

export default EpisodesListComponent
