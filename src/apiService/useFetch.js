import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url)
        setData(response.data.feed.entry)
        console.log(response.data.feed.entry);
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [url])

  return { data, error }
}

export default useFetch