import { createActions } from 'redux-actions'

export const {
  getPopularHotels,
  setPopularHotels,
  getAvailableHotels,
  setAvailableHotels,
} = createActions(
  'GET_POPULAR_HOTELS',
  'SET_POPULAR_HOTELS',
  'GET_AVAILABLE_HOTELS',
  'SET_AVAILABLE_HOTELS',
)
