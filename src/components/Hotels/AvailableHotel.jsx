import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function AvailableHotel() {
  const params = useParams()

  const [availableHotel, setAvailableHotel] = useState(null)
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const url = new URL(
      'https://fe-student-api.herokuapp.com/api/hotels/hotelId',
    )
    const newUrl = new URL(`${params.id}`, url)

    fetch(`${newUrl}`)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setAvailableHotel(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        },
      )
  }, [params.id])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else if (availableHotel === null) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="available-hotel__item">
        <div>
          <div>
            <Link to="/hotels" className="available-hotel__link">
              <button className="available-hotel__btn-back">Back</button>
            </Link>
          </div>
          <div className="available-hotel__description">
            <h2 className="available-hotel__title">{availableHotel.name}</h2>
            <p className="available-hotel_p-place">
              {availableHotel.city}, {availableHotel.country}
            </p>
          </div>
        </div>
        <div className="available-hotel__picture">
          <button className="available-hotel__btn-book">Book now</button>
          <img
            className="available-hotel_img"
            src={availableHotel.imageUrl}
            alt={availableHotel.name}
          />
        </div>
      </div>
    )
  }
}

export default AvailableHotel
