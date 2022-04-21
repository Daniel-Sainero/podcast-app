/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url, contentType) => {
  const [data, setData] = useState({})
  const [error, setError] = useState(null)



  useEffect(() => {
    const checkLastCall = () => {
      const lastCall = localStorage.getItem(`lastCall${contentType}`)
      const now = new Date()
      const diff = now - new Date(lastCall)
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      if (hours > 24) {
        localStorage.setItem(`lastCall${contentType}`, now)
        return true
      }
      return false
    }

    const fetchData = async () => {
      const savedLastCall = localStorage.getItem(`lastCall${contentType}`)
      if (!savedLastCall) {
        localStorage.setItem(`lastCall${contentType}`, new Date())
      }

      try {
        const response = await axios(url)
        setData(response.data)
        localStorage.setItem(contentType, JSON.stringify(response.data))
      } catch (error) {
        setError(error)
      }
    }

      if (checkLastCall() || contentType !== 'home') {  // if home last call was more than 24 hours ago
        fetchData()
      } else {
        const savedData = localStorage.getItem(contentType)
        if (savedData) {
          setData(JSON.parse(savedData))
        } else {
          fetchData()
        }
      }
  }, [url, contentType])

  return { data, error }
}

export default useFetch
