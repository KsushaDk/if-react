import React from 'react'
import PropTypes from 'prop-types'

import HotelItem from './HotelItem.jsx'
import './Hotels.css'

function HotelsItems({ title, hotels }) {
  return (
    <div>
      <h2 className="hotels__title">{title}</h2>
      <div className="hotels__carrousel">
        {hotels.slice(0, 4).map((item) => {
          return <HotelItem item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}

HotelsItems.propTypes = {
  title: PropTypes.string,
  hotels: PropTypes.arrayOf(PropTypes.object),
}

export default HotelsItems
