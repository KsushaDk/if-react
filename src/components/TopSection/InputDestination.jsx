import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

//actions
import { setDestinationInfo } from '../../redux/actions/formActions'

function InputDestination() {
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(setDestinationInfo(event.target.value))
    },
    [dispatch],
  )

  return (
    <div className="form__div-destination">
      <label htmlFor="search" className="form__label">
        Your destination or hotel name
      </label>
      <input
        className="form__input form__input-destination"
        id="search"
        type="text"
        name="search"
        placeholder="New York"
        onChange={handleChange}
      />
    </div>
  )
}

InputDestination.displayName = 'InputDestination'

export default InputDestination
