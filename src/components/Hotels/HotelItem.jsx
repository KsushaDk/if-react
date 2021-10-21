import React from 'react'
import PropTypes from 'prop-types'

function HotelItem({ item }) {
  return (
    <div>
      <img
        className="hotels__carrousel_img"
        src={item.imageUrl}
        alt={item.name}
      />
      <p className="hotels__carrousel_p-name">{item.name}</p>
      <p className="hotels__carrousel_p-place">
        {item.city}, {item.country}
      </p>
    </div>
  )
}

HotelItem.propTypes = {
  item: PropTypes.object,
}

export default HotelItem
