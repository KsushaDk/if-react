import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './Hotels.styles'

function HotelItem({ item }) {
  const classes = useStyles()

  return (
    <div>
      <img
        className={classes.hotels__carrousel_img}
        src={item.imageUrl}
        alt={item.name}
      />
      <p className={classes.hotels__carrousel_p_name}>{item.name}</p>
      <p className={classes.hotels__carrousel_p_place}>
        {item.city}, {item.country}
      </p>
    </div>
  )
}

HotelItem.propTypes = {
  item: PropTypes.object,
}

HotelItem.displayName = 'HotelItem'

export default HotelItem
