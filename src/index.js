import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './views/home'
import PodcastDetail from './views/podcast-detail'
import PodcastChapter from './views/podcast-chapter'
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
          element={<PodcastDetail />}
        ></Route>
        <Route
          exact
          path='/podcast/:podcastId/episode/:episodeId'
          element={<PodcastChapter />}
        ></Route>
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
