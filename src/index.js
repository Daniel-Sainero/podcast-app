import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './views/home/home';
import PodcastEpisodes from './views/episodes/podcast-episodes';
import PodcastDetail from './views/detail/podcast-detail';
import HeaderComponent from './components/Header/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <HeaderComponent />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route
          exact
          path='/podcast/:podcastId'
          element={<PodcastEpisodes />}
        ></Route>
        <Route
          exact
          path='/podcast/:podcastId/episode/:episodeId'
          element={<PodcastDetail />}
        ></Route>
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
