import EpisodesInfoComponent from '../../components/EpisodesInfo/EpisodesInfo'
import {
  DetailWrapperStyled,
  AudioWrapperStyled,
  AudioTitle,
  AudioDescription,
  AudioStyled,
} from './podcast-detail.styled'
import DOMPurify from 'dompurify'
import { useState, useEffect, useContext } from 'react'
import LoadingContext from '../../context/loadingContext'

const PodcastDetail = () => {
  const { show, hide } = useContext(LoadingContext)
  const [feed, setFeed] = useState(null)
  const [podcast, setPodcast] = useState(null)

  useEffect(() => {
    show()
    const feed = JSON.parse(localStorage.getItem('feed'))
    setFeed(feed)
    const podcast = JSON.parse(localStorage.getItem('podcast'))
    setPodcast(podcast)
    hide()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    podcast && (
      <DetailWrapperStyled>
        <EpisodesInfoComponent podcast={feed}></EpisodesInfoComponent>

        <AudioWrapperStyled>
          <AudioTitle>{podcast.title}</AudioTitle>
          <AudioDescription
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(podcast.content),
            }}
          ></AudioDescription>
          <AudioStyled controls>
            <source src={podcast.enclosure.url} type='audio/mpeg'></source>
          </AudioStyled>
        </AudioWrapperStyled>
      </DetailWrapperStyled>
    )
  )
}

export default PodcastDetail
