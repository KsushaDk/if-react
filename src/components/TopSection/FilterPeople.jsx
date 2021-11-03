import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Selectors from './Selectors.jsx'

function FilterPeople({ people, setPeople }) {
  const [adults, setAdults] = useState(people.adults)
  const [children, setChildren] = useState(people.children)
  const [rooms, setRooms] = useState(people.rooms)

  const [isDisabled, setDisabled] = useState({
    adultsBtnDec: false,
    adultsBtnInc: false,
    childrenBtnDec: false,
    childrenBtnInc: false,
    roomsBtnDec: false,
    roomsBtnInc: false,
  })

  const [selectors, setSelectors] = useState([])

  function addSelector() {
    setSelectors([...selectors, { id: Date.now() }])
  }

  function removeSelector() {
    setSelectors(selectors.slice(1))
  }

  return (
    <div className="form__filter-people-focus">
      <div className="form__filter-div">
        <span>
          <label htmlFor="adults">Adults</label>
        </span>
        <div>
          <button
            disabled={isDisabled.adultsBtnDec}
            className={isDisabled.adultsBtnDec ? 'disabled' : ''}
            value="dec"
            onClick={(e) => {
              e.preventDefault()
              setAdults((adults) => adults - 1)

              setPeople({ ...people, adults: adults })

              if (adults <= 1) {
                setDisabled({ ...isDisabled, adultsBtnDec: true })
              } else {
                setDisabled({ ...isDisabled, adultsBtnDec: false })
                setDisabled({ ...isDisabled, adultsBtnInc: false })
              }
            }}
          >
            -
          </button>
          <input value={adults} id="adults" type="text" readOnly />
          <button
            disabled={isDisabled.adultsBtnInc}
            className={isDisabled.adultsBtnInc ? 'disabled' : ''}
            value="inc"
            onClick={(e) => {
              e.preventDefault()
              setAdults((adults) => adults + 1)

              setPeople({ ...people, adults: adults })

              if (adults >= 30) {
                setDisabled({ ...isDisabled, adultsBtnInc: true })
              } else {
                setDisabled({ ...isDisabled, adultsBtnDec: false })
              }
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="form__filter-div">
        <span>
          <label htmlFor="children">Children</label>
        </span>
        <div>
          <button
            disabled={isDisabled.childrenBtnDec}
            className={isDisabled.childrenBtnDec ? 'disabled' : ''}
            value="dec"
            onClick={(e) => {
              e.preventDefault()
              setChildren((children) => children - 1)

              setPeople({ ...people, children: children })

              removeSelector()

              if (children <= 1) {
                setDisabled({ ...isDisabled, childrenBtnDec: true })
              } else {
                setDisabled({ ...isDisabled, childrenBtnDec: false })
                setDisabled({ ...isDisabled, childrenBtnInc: false })
              }
            }}
          >
            -
          </button>
          <input value={children} id="children" type="text" readOnly />
          <button
            disabled={isDisabled.childrenBtnInc}
            className={isDisabled.childrenBtnInc ? 'disabled' : ''}
            value="inc"
            onClick={(e) => {
              e.preventDefault()
              setChildren((children) => children + 1)

              setPeople({ ...people, children: children })

              addSelector()

              if (children >= 10) {
                setDisabled({ ...isDisabled, childrenBtnInc: true })
              } else {
                setDisabled({ ...isDisabled, childrenBtnDec: false })
              }
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="form__filter-div">
        <span>
          <label htmlFor="rooms">Rooms</label>
        </span>
        <div>
          <button
            disabled={isDisabled.roomsBtnDec}
            className={isDisabled.roomsBtnDec ? 'disabled' : ''}
            value="dec"
            onClick={(e) => {
              e.preventDefault()
              setRooms((rooms) => rooms - 1)

              setPeople({ ...people, rooms: rooms })

              if (rooms <= 1) {
                setDisabled({ ...isDisabled, roomsBtnDec: true })
              } else {
                setDisabled({ ...isDisabled, roomsBtnDec: false })
                setDisabled({ ...isDisabled, roomsBtnInc: false })
              }
            }}
          >
            -
          </button>
          <input value={rooms} id="rooms" type="text" readOnly />
          <button
            disabled={isDisabled.roomsBtnInc}
            className={isDisabled.roomsBtnInc ? 'disabled' : ''}
            value="inc"
            onClick={(e) => {
              e.preventDefault()
              setRooms((rooms) => rooms + 1)

              setPeople({ ...people, rooms: rooms })

              if (rooms >= 30) {
                setDisabled({ ...isDisabled, roomsBtnInc: true })
              } else {
                setDisabled({ ...isDisabled, roomsBtnDec: false })
              }
            }}
          >
            +
          </button>
        </div>
      </div>
      {selectors.length > 0 ? <Selectors selectors={selectors} /> : <> </>}
    </div>
  )
}

FilterPeople.propTypes = {
  setPeople: PropTypes.func,
  people: PropTypes.object,
}
export default FilterPeople
