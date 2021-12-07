import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import useStyles from './Hotels.styles'

import HotelItem from './HotelItem.jsx'

function HotelItems({ title }) {
  const classes = useStyles()

  const hotels = useSelector(({ hotels }) => hotels.popular || [])

  return (
    <div className={classes.hotels}>
      <h2 className={classes.hotels__title}>{title}</h2>
      <div className={classes.hotels__carrousel}>
        {hotels.slice(0, 4).map((item) => {
          return <HotelItem item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}

HotelItems.propTypes = {
  title: PropTypes.string,
}

HotelItems.displayName = 'HotelItems'

export default HotelItems
