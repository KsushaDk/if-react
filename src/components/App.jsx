import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//components
import TopSection from './TopSection/TopSection.jsx'
import HotelsItems from './Hotels/HotelsItems.jsx'
import Footer from './Footer/Footer.jsx'

//routes
import AvailableHotels from './Hotels/AvailableHotels.jsx'
import AvailableHotel from './Hotels/AvailableHotel.jsx'

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
      <Router>
        <TopSection hotelData={hotelData} setHotelData={setHotelData} />

        {!!availableHotels && (
          <AvailableHotels
            hotels={availableHotels}
            title={'Available hotels'}
          />
        )}
        {/* <Switch> */}
        <Route exact path="/hotels/:id">
          <AvailableHotel />
        </Route>
        {/* </Switch> */}
        <Route exact path="/">
          <HotelsItems hotels={defaultHotels} title={'Homes guests loves'} />
        </Route>
        <Footer />
      </Router>
    )
  }
}

export default App
