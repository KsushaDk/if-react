import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useStyles from './Hotels.styles'
import { useSelector } from 'react-redux'

function AvailableHotel() {
  const params = useParams()
  const classes = useStyles()

  const availableHotels = useSelector(({ hotels }) => hotels.available)
  const hotelId = params.id

  const pickedHotel = availableHotels.find((item) => item.id === `${hotelId}`)

  return (
    <div className={classes.available_hotel__item}>
      <div className={classes.available_hotel__info}>
        <div>
          <Link to="/hotels" className={classes.available_hotel__link}>
            <button className={classes.available_hotel__btn_back}>Back</button>
          </Link>
        </div>
        <div className={classes.available_hotel__description}>
          <h2 className={classes.available_hotel__title}>{pickedHotel.name}</h2>
          <p className={classes.available_hotel_p_place}>
            {pickedHotel.city}, {pickedHotel.country}
          </p>
        </div>
      </div>
      <div className={classes.available_hotel__picture}>
        <button className={classes.available_hotel__btn_book}>Book now</button>
        <img
          className={classes.available_hotel_img}
          src={pickedHotel.imageUrl}
          alt={pickedHotel.name}
        />
      </div>
    </div>
  )
}

AvailableHotel.displayName = 'AvailableHotel'

export default AvailableHotel
