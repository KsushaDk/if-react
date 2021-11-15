import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading'
import { Switch } from 'react-router'

import { Provider } from 'react-redux'
import store from '../redux/store'

import '../index.css'

//containers
import PublicRoute from '../containers/PublicRoute.jsx'

//routes
import HotelRoutes from '../routes/HotelRoutes.jsx'
import SignIn from './TopSection/SignIn.jsx'

function App() {
  const [hotelData, setHotelData] = useState('')

  const [defaultHotels, setHotels] = useState([])
  const [availableHotels, setAvailableHotels] = useState([])

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
    return (
      <ReactLoading
        className="loading"
        type={'bubbles'}
        color={'#3077c6'}
        height="10"
        width="10"
      />
    )
  } else {
    return (
      <>
        <Switch>
          <PublicRoute exact path="/signin">
            <SignIn />
          </PublicRoute>

          <HotelRoutes
            hotelData={hotelData}
            setHotelData={setHotelData}
            availableHotels={availableHotels}
            defaultHotels={defaultHotels}
          />
        </Switch>
      </>
    )
  }
}

export default App
