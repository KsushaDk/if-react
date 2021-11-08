import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

function HotelItem({ item }) {
  //here will be the Link
  // console.log('item', item, item.name)
  return (
    <div>
      {/* <Link to="/hotel с.да ендпоинт по которому будет серчиться определенный ко панент">Hotel</Link> */}
      <img
        className="hotels__carrousel_img"
        src={item.imageUrl}
        alt={item.name}
      />
      <p className="hotels__carrousel_p-name">
        {item.name}
        {/* <Link to={`/hotel/${item.id}`>{item.name}</Link> */}
        {/* /hotels/hotelId */}
      </p>
      <p className="hotels__carrousel_p-place">
        {/* <Link to={`/hotel/${item.id}`> */}
        {item.city}, {item.country}
        {/* </Link> */}
      </p>
    </div>
  )
}

HotelItem.propTypes = {
  item: PropTypes.object,
}

export default HotelItem
