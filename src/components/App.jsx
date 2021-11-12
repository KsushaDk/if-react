import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading'
import { Switch, Redirect } from 'react-router'
import { defaultUserContext, UserContext } from '../contexts/user-context.jsx'
import '../index.css'

//containers
import PublicRoute from '../containers/PublicRoute.jsx'
import PrivateRoute from '../containers/PrivateRoute.jsx'

//routes
// import HotelRoutes from '../routes/HotelRoutes.jsx'
import SignIn from './TopSection/SignIn.jsx'
import AvailableHotels from './Hotels/AvailableHotels.jsx'
import AvailableHotel from './Hotels/AvailableHotel.jsx'
import HotelItems from './Hotels/HotelItems.jsx'

function App() {
  const [state, setState] = useState({ ...defaultUserContext })

  const signIn = (user) => {
    setState({
      user,
      isAuthenticated: true,
    })
  }

  const signOut = () => {
    setState({ ...defaultUserContext })
  }

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
      <UserContext.Provider value={{ ...state, signIn, signOut }}>
        <>
          <Switch>
            <PublicRoute exact path="/signin">
              <SignIn />
            </PublicRoute>

            <PrivateRoute
              exact
              path="/"
              hotelData={hotelData}
              setHotelData={setHotelData}
            >
              {!!availableHotels.length && (
                <AvailableHotels
                  hotels={availableHotels}
                  title={'Available hotels'}
                />
              )}

              <HotelItems hotels={defaultHotels} title={'Homes guests loves'} />
            </PrivateRoute>

            <PrivateRoute exact path="/hotels/:id">
              <AvailableHotel />
            </PrivateRoute>

            <PrivateRoute path="/hotels">
              <Redirect strict from="hotels" to="/" />
            </PrivateRoute>
          </Switch>
        </>
      </UserContext.Provider>
    )
  }
}

export default App
