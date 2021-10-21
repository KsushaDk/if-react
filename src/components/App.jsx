import React, { useState } from 'react'
import _ from 'lodash'

import TopSection from './TopSection/TopSection.jsx'
import HotelsItems from './Hotels/HotelsItems.jsx'

import hotels from '../constants/dataHotels'

function App() {
  const [state, setState] = useState([])

  const setData = (event) => {
    setState(
      _.filter(
        hotels,
        (item) =>
          item.name === `${event}` ||
          item.city === `${event}` ||
          item.country === `${event}`,
      ),
    )
  }

  return (
    <>
      <TopSection data={hotels} setHotels={setData} />

      <div className="hotels">
        {state.length ? (
          <HotelsItems data={state} title={'Available hotels'} />
        ) : (
          <></>
        )}

        <HotelsItems data={hotels.slice(0, 4)} title={'Homes guests loves'} />
      </div>
    </>
  )
}

export default App
