import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './views/home/home'
import PodcastEpisodes from './views/episodes/podcast-episodes'
import PodcastDetail from './views/detail/podcast-detail'
import HeaderComponent from './components/Header/Header'
import { LoadingProvider } from './context/loadingProvider'

function App() {
  return (
    <Router>
    <LoadingProvider>
      <HeaderComponent/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/podcast/:podcastId' element={<PodcastEpisodes />} />
        <Route
          path='/podcast/:podcastId/episode/:episodeId'
          element={<PodcastDetail />}
        />
        <Route path='*' element={<Home />} />
      </Routes>
      </LoadingProvider>
    </Router>
  )
}

export default App
