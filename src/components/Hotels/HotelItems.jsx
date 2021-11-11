import React from 'react'
import PropTypes from 'prop-types'

import HotelItem from './HotelItem.jsx'
import './Hotels.css'

function HotelItems({ title, hotels }) {
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
  hotels: PropTypes.arrayOf(PropTypes.object),
}

HotelItems.displayName = 'HotelItems'

export default HotelItems
