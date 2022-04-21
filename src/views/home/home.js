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

  const podcastURI = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  const { data } = useFetch(podcastURI, 'home')
  const podcasts = data?.feed?.entry
  const [query, setQuery] = useState('')

  // eslint-disable-next-line array-callback-return
  const podcastList = podcasts?.filter((podcast) => {
    if (query === '') {
      return podcast
    } else if (
      podcast['im:artist'].label.toLowerCase().includes(query.toLowerCase()) ||
      podcast['im:name'].label.toLowerCase().includes(query.toLowerCase())
    ) {
      return podcast
    }
  })

  return (
    podcastList && (
      <>
        <SearchContainerStyled>
          <CounterComponent podcastLength={podcastList.length} />
          <SearchBarStyled
            placeholder='Filter podcast...'
            onChange={(event) => setQuery(event.target.value)}
          />
        </SearchContainerStyled>
        <HomeStyled>
          {podcastList.map((podcast) => (
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
