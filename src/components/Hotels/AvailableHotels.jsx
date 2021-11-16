import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Hotels.css'

function AvailableHotels({ title, hotels }) {
  return (
    <div className="hotels">
      <h2 className="hotels__title">{title}</h2>

      <div className="hotels__carrousel">
        {hotels.slice(0, 4).map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/hotels/${item.id}`} className="available-hotel__link">
                <img
                  className="hotels__carrousel_img"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <p className="hotels__carrousel_p-name">{item.name}</p>
                <p className="hotels__carrousel_p-place">
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
