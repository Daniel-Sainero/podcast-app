import useFetch from '../apiService/useFetch'

const Home = (props) => {
  const { data, error } = useFetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
  if(error){
    console.log(error)
 };
  return (data && <div> {data.map(item => <div key={item.id.attributes['im:id']}>{item["im:artist"].label}</div>)}</div>)
}

export default Home
