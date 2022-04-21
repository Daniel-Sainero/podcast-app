import { useState } from 'react'
import useFetch from '../../apiService/useFetch'
import Podcast from '../../components/Podcast/Podcast'
import CounterComponent from '../../components/Counter/Counter'
import {
  HomeStyled,
  SearchContainerStyled,
  SearchBarStyled,
} from './home.styled'

const Home = () => {
  const { data } = useFetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    'home'
  )
  const podcasts = data?.feed?.entry
  const [query, setQuery] = useState('')

  let shortedPodcast = podcasts?.filter((podcast) => {
    return (
      podcast['im:artist'].label.toLowerCase().includes(query.toLowerCase()) ||
      podcast['im:name'].label.toLowerCase().includes(query.toLowerCase())
    )
  })

  return (
    shortedPodcast && (
      <>
        <SearchContainerStyled>
          <CounterComponent podcastLength={shortedPodcast.length} />
          <SearchBarStyled
            placeholder='Filter podcast...'
            onChange={(event) => setQuery(event.target.value)}
          />
        </SearchContainerStyled>
        <HomeStyled>
          {shortedPodcast.map((podcast) => (
            <Podcast
              key={podcast.id.attributes['im:id']}
              author={podcast['im:artist'].label}
              podcastName={podcast.title.label}
              image={podcast['im:image'][1].label}
              id={podcast.id.attributes['im:id']}
            ></Podcast>
          ))}
        </HomeStyled>
      </>
    )
  )
}

export default Home
