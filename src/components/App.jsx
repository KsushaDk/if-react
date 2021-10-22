import React, { useState } from 'react'

import TopSection from './TopSection/TopSection.jsx'
import HotelsItems from './Hotels/HotelsItems.jsx'

import hotels from '../constants/dataHotels'

function App() {
  const [data, setHotelData] = useState([])

  return (
    <>
      <TopSection setHotelData={setHotelData} />

      <div className="hotels">
        {data.length ? (
          <HotelsItems dataHotels={data} title={'Available hotels'} />
        ) : (
          <></>
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
