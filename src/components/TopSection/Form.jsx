import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

//actions
import { getAvailableHotels } from '../../redux/actions/hotelActions'

//components
import InputDestination from './InputDestination.jsx'
import InputDate from './InputDate.jsx'
import InputPeople from './InputPeople.jsx'
import FilterPeople from './FilterPeople.jsx'

function Form() {
  const [filter, setFilter] = useState(false)

  const dispatch = useDispatch()

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(getAvailableHotels())
    },
    [dispatch],
  )

  return (
    <>
      <form className="top-section__form" onSubmit={handleSubmit}>
        <InputDestination />
        <InputDate />
        <InputPeople
          onClick={() => {
            setFilter((filter) => !filter)
          }}
        />
        <div className="form__div-btn">
          <input
            className="form__input form__input-btn"
            type="submit"
            value="Search"
          />
        </div>

        {filter && <FilterPeople />}
      </form>
    </>
  )
}

Form.displayName = 'Form'

export default Form
