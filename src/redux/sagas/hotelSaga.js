import { call, put, takeLatest, select } from 'redux-saga/effects'

//actions
import {
  getPopularHotels,
  setPopularHotels,
  getAvailableHotels,
  setAvailableHotels,
} from '../actions'

//requests
import { httpGet } from '../../helpers/request'
import { availableHotelsUrl, popularHotelsUrl } from '../constants/urls'

function* getHotelSaga({ type }) {
  try {
    if (type === getPopularHotels.toString()) {
      const popular = yield call(httpGet, popularHotelsUrl)
      yield put(setPopularHotels(popular))
    }
    if (type === getAvailableHotels.toString()) {
      const queryParams = yield select(({ form }) => form)
      const available = yield call(httpGet, availableHotelsUrl, queryParams)
      yield put(setAvailableHotels(available))
    }
  } catch (err) {
    console.log('Error:', err.message)
  }
}

function* hotelSaga() {
  yield takeLatest(getPopularHotels.toString(), getHotelSaga)
  yield takeLatest(getAvailableHotels.toString(), getHotelSaga)
}

export default hotelSaga
