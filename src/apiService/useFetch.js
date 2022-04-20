import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url, contentType) => {
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url)
        setData(response.data)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [url, contentType])

  return { data, error }
}

export default useFetch
