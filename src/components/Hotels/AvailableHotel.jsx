import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading'
import { useParams, Link } from 'react-router-dom'
import useStyles from './Hotels.styles'

function AvailableHotel() {
  const params = useParams()
  const classes = useStyles()

  const [availableHotel, setAvailableHotel] = useState(null)
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const url = new URL(
      'https://fe-student-api.herokuapp.com/api/hotels/hotelId',
    )
    const newUrl = new URL(`${params.id}`, url)

    fetch(`${newUrl}`)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setAvailableHotel(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        },
      )
  }, [params.id])

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
  } else if (availableHotel === null) {
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
      <div className={classes.available_hotel__item}>
        <div className={classes.available_hotel__info}>
          <div>
            <Link to="/hotels" className={classes.available_hotel__link}>
              <button className={classes.available_hotel__btn_back}>
                Back
              </button>
            </Link>
          </div>
          <div className={classes.available_hotel__description}>
            <h2 className={classes.available_hotel__title}>
              {availableHotel.name}
            </h2>
            <p className={classes.available_hotel_p_place}>
              {availableHotel.city}, {availableHotel.country}
            </p>
          </div>
        </div>
        <div className={classes.available_hotel__picture}>
          <button className={classes.available_hotel__btn_book}>
            Book now
          </button>
          <img
            className={classes.available_hotel_img}
            src={availableHotel.imageUrl}
            alt={availableHotel.name}
          />
        </div>
      </div>
    )
  }
}

AvailableHotel.displayName = 'AvailableHotel'

export default AvailableHotel
