import { handleActions } from 'redux-actions'

//actions
import { setPopularHotels, setAvailableHotels } from '../actions'

//constants
import { initialHotelState } from '../constants/initialState'

export const hotelReducer = handleActions(
  {
    [setPopularHotels]: (state, { payload: popular }) => ({
      ...state,
      popular,
    }),
    [setAvailableHotels]: (state, { payload: available }) => ({
      ...state,
      available,
    }),
  },
  initialHotelState,
)
