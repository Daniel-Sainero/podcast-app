import { useParams } from 'react-router-dom'
import useFetch from '../../apiService/useFetch'
import { EpisodesStyled } from './podcast-episodes.styled'
import EpisodesInfoComponent from '../../components/EpisodesInfo/EpisodesInfo'
import EpisodesListComponent from '../../components/EpisodesList/EpisodesList'

const PodcastEpisodes = () => {
  const params = useParams()
  const podcastURI = `https://itunes.apple.com/lookup?id=${params.podcastId}`
  const URI = `https://api.allorigins.win/get?url=${encodeURIComponent(
    podcastURI
  )}`
  const { data } = useFetch(URI)

  let parsedPodcast
  if (data?.contents) {
    parsedPodcast = JSON.parse(data?.contents)
  }

  return (
    data?.contents && (
      <EpisodesStyled>
        <EpisodesInfoComponent feedUrl={parsedPodcast?.results[0]?.feedUrl}></EpisodesInfoComponent>
        <EpisodesListComponent feedUrl={parsedPodcast?.results[0]?.feedUrl}/>
      </EpisodesStyled>
    )
  )
}

export default PodcastEpisodes
