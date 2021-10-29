import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import HotelItem from './HotelItem.jsx'
import './Hotels.css'

function HotelsItems({ title, availableHotels }) {
  const [hotels, setHotels] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setHotels(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        },
      )
  }, [])

  if (availableHotels) {
    return (
      <div>
        <h2 className="hotels__title"> {title}</h2>
        <div className="hotels__carrousel">
          {availableHotels.slice(0, 4).map((item) => {
            return <HotelItem item={item} key={item.id} />
          })}
        </div>
      </div>
    )
  } else if (error) {
    return <div>Error: {error}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
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
}

HotelsItems.propTypes = {
  title: PropTypes.string,
  availableHotels: PropTypes.arrayOf(PropTypes.object),
}

export default HotelsItems
