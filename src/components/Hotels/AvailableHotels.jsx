import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import useStyles from './Hotels.styles'

function AvailableHotels({ title, hotels }) {
  const classes = useStyles()

  return (
    <div className={classes.hotels}>
      <h2 className={classes.hotels__title}>{title}</h2>

      <div className={classes.available_hotels__carrousel}>
        {hotels.slice(0, 4).map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/hotels/${item.id}`}>
                <img
                  className={classes.hotels__carrousel_img}
                  src={item.imageUrl}
                  alt={item.name}
                />
                <p className={classes.hotels__carrousel_p_name}>{item.name}</p>
                <p className={classes.hotels__carrousel_p_place}>
                  {item.city + ',' + ' ' + item.country}
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

AvailableHotels.propTypes = {
  title: PropTypes.string,
  hotels: PropTypes.arrayOf(PropTypes.object),
}

AvailableHotels.displayName = 'AvailableHotels'

export default AvailableHotels
