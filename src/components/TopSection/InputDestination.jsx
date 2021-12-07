import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useStyles from './TopSection.styles'

//actions
import { setDestinationInfo } from '../../redux/actions/formActions'

function InputDestination() {
  const classes = useStyles()

  const dispatch = useDispatch()

  const handleChange = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(setDestinationInfo(event.target.value))
    },
    [dispatch],
  )

  return (
    <div className={classes.form__div_destination}>
      <label htmlFor="search" className={classes.form__label}>
        Your destination or hotel name
      </label>
      <input
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
