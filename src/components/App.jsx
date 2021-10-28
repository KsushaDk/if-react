import React, { useState } from 'react'

import TopSection from './TopSection/TopSection.jsx'
import HotelsItems from './Hotels/HotelsItems.jsx'

import hotels from '../constants/dataHotels'

function App() {
  const [hotelData, setHotelData] = useState([])

  const filteredHotels = hotels.filter(
    (item) =>
      item.name === `${hotelData}` ||
      item.city === `${hotelData}` ||
      item.country === `${hotelData}`,
  )

  return (
    <>
      <TopSection data={hotelData} setHotelData={setHotelData} />

      <div className="hotels">
        {!!hotelData.length && (
          <HotelsItems dataHotels={filteredHotels} title={'Available hotels'} />
        )}

        <HotelsItems
          dataHotels={hotels.slice(0, 4)}
          title={'Homes guests loves'}
        />
      </div>
    </>
  )
}

export default App
