import React, { useState, useEffect } from 'react'

import TopSection from './TopSection/TopSection.jsx'
import HotelsItems from './Hotels/HotelsItems.jsx'

function App() {
  const [hotelData, setHotelData] = useState('')

  const [defaultHotels, setHotels] = useState([])
  const [availableHotels, setAvailableHotels] = useState(null)

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setHotels(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        },
      )
  }, [])

  useEffect(() => {
    if (hotelData) {
      const url = new URL('https://fe-student-api.herokuapp.com/api/hotels')
      url.searchParams.set('search', `${hotelData}`)
      fetch(`${url}`)
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoaded(true)
            setAvailableHotels(result)
          },
          (error) => {
            setIsLoaded(true)
            setError(error)
          },
        )
    }
  }, [hotelData])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <TopSection hotelData={hotelData} setHotelData={setHotelData} />

        <div className="hotels">
          {!!availableHotels && (
            <HotelsItems hotels={availableHotels} title={'Available hotels'} />
          )}
          <HotelsItems hotels={defaultHotels} title={'Homes guests loves'} />
        </div>
      </>
    )
  }
}

export default App
