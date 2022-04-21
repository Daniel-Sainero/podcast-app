import { useParams } from 'react-router-dom'
import useFetch from '../../apiService/useFetch'
import Parser from 'rss-parser'
import { EpisodesStyled } from './podcast-episodes.styled'
import EpisodesInfoComponent from '../../components/EpisodesInfo/EpisodesInfo'
import EpisodesListComponent from '../../components/EpisodesList/EpisodesList'
import { useState } from 'react'

const PodcastEpisodes = () => {
  const params = useParams()
  const podcastURI = `https://itunes.apple.com/lookup?id=${params.podcastId}`
  const URI = `https://api.allorigins.win/get?url=${encodeURIComponent(
    podcastURI
  )}`
  const { data } = useFetch(URI)
  const [feed, setFeed] = useState(null)
  const [cached, setCached] = useState(false)

  const setInLocalStorage = (keyName, value) => {
    localStorage.clear()
    try {
        localStorage.setItem(keyName, JSON.stringify(value));
    } catch (error) {
        setInLocalStorage(keyName, JSON.parse(localStorage.getItem(keyName)));
    }
  };
  const fetchData = async () => {
    const CORS_PROXY = 'https://api.allorigins.win/raw?url='

    if (!cached) {
      let parsedPodcast = JSON.parse(data?.contents)
      let parser = new Parser()
      const feed = await parser.parseURL(
        CORS_PROXY + parsedPodcast?.results[0]?.feedUrl
      )
      setFeed(feed)
      setInLocalStorage('feed', feed)
      setCached(true)
    }
  }

  if (data?.contents) {
    fetchData()
  }

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
