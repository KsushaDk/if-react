import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import HotelItem from './HotelItem.jsx'
import './Hotels.css'

function HotelItems({ title }) {
  const hotels = useSelector(({ hotels }) => hotels.popular || [])

  return (
    <div className="hotels">
      <h2 className="hotels__title">{title}</h2>
      <div className="hotels__carrousel">
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
