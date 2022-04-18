import useFetch from '../apiService/useFetch'
import Podcast from '../components/Podcast/Podcast'
import { HomeStyled } from './home.styled'
import { useState } from 'react'

const Home = (props) => {
  const { data } = useFetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  )
  const [query, setQuery] = useState('')

  return (
    data && (
      <>
        <input
          placeholder='Search'
          onChange={(event) => setQuery(event.target.value)}
        />
        <HomeStyled>
          {data
            // eslint-disable-next-line array-callback-return
            .filter((podcast) => {
              if (query === '') {
                return podcast
              } else if (
                podcast['im:artist'].label
                  .toLowerCase()
                  .includes(query.toLowerCase()) ||
                podcast['im:name'].label
                  .toLowerCase()
                  .includes(query.toLowerCase())
              ) {
                return podcast
              }
            })
            .map((podcast) => (
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
