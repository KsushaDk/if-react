import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './Hotels.styles'

function HotelItem({ item }) {
  const classes = useStyles()

  return (
    <div className={classes.hotels__slider_div}>
      <img
        className={classes.hotels__carrousel_img}
        src={item.imageUrl}
        alt={item.name}
      />
      <p className={classes.hotels__carrousel_p_name}>
        <a href="#">{item.name}</a>
      </p>
      <p className={classes.hotels__carrousel_p_place}>
        <a href="#">
          {item.city}, {item.country}
        </a>
      </p>
    </div>
  )
}

HotelItem.propTypes = {
  item: PropTypes.object,
}

HotelItem.displayName = 'HotelItem'

export default HotelItem
