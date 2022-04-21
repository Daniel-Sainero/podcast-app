import { useParams } from 'react-router-dom'
import useFetch from '../../apiService/useFetch'
import Parser from 'rss-parser'
import { EpisodesStyled } from './podcast-episodes.styled'
import EpisodesInfoComponent from '../../components/EpisodesInfo/EpisodesInfo'
import EpisodesListComponent from '../../components/EpisodesList/EpisodesList'
import { useState, useEffect, useContext } from 'react'
import LoadingContext from '../../context/loadingContext'

const PodcastEpisodes = () => {
  const { show, hide } = useContext(LoadingContext)
  const params = useParams()
  const podcastURI = `https://itunes.apple.com/lookup?id=${params.podcastId}`
  const URI = `https://api.allorigins.win/get?url=${encodeURIComponent(
    podcastURI
  )}`
  const { data } = useFetch(URI, 'episodes')
  const [feed, setFeed] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      show()
      const CORS_PROXY = 'https://api.allorigins.win/raw?url='

      let parsedPodcast = JSON.parse(data?.contents)
      let parser = new Parser()

      const feed = await parser.parseURL(
        CORS_PROXY + parsedPodcast?.results[0]?.feedUrl
      )
      if (feed?.items.length > 200) {
        feed.items.length = 16
      }

      localStorage.setItem('feed', JSON.stringify(feed))
      setFeed(feed)
      hide()
    }
    if (data?.contents) {
      fetchData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    data?.contents && (
      <EpisodesStyled>
        <EpisodesInfoComponent podcast={feed} />
        <EpisodesListComponent podcast={feed} />
      </EpisodesStyled>
    )
  )
}

export default PodcastEpisodes
