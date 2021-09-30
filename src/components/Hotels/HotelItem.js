import React from 'react'
import PropTypes from 'prop-types'
import './Hotels.css'

function HotelItem({item}) {
  return (
    <div>    
      <img className="hotels__carrousel_img" src={item.imageUrl} alt=""/>
      <p className="hotels__carrousel_p">{item.name}</p>
      <p className="hotels__carrousel_grey">{item.city}, {item.country}</p>
    </div>
    )
}

HotelItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default HotelItem