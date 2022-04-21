import React, { useState } from 'react'
import PodcastContext from './podcastContext'

export function PodcastProvider(props) {
  const [feed, setFeed] = useState({})
  const [podcastList, setPodcastList] = useState([])

  return (
    <PodcastContext.Provider
      value={{
        feed: {},
        podcasts: podcastList,
        addFeed: () => setFeed(feed),
        addPodcastListToContext: (items) => {
          setPodcastList(items)
          },
      }}
    >
      {props.children}
    </PodcastContext.Provider>
  )
}
