import useFetch from '../apiService/useFetch'
import Podcast from '../components/Podcast/Podcast'
import { HomeStyled } from './home.styled';

const Home = (props) => {
  const { data, error } = useFetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  )
  if (error) {
    console.log(error)
  }
  return (
    data && (
      <HomeStyled>
        {data.map((item) => (
          <Podcast
            key={item.id.attributes['im:id']}
            author={item['im:artist'].label}
            podcastName={item.title.label}
            image={item["im:image"][1].label}
          ></Podcast>
        ))}
      </HomeStyled>
    )
  )
}

export default Home
