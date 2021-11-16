import { userActionTypes } from '../constants/actionConstants'

import { initialUserState } from '../constants/initialState'

export function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case userActionTypes.loginUser:
      return {
        ...state,
        isAuthenticated: true,
      }
    case userActionTypes.addUser:
      return {
        ...state,
        email: action.email,
        password: action.password,
      }
    case userActionTypes.logoutUser:
      return {
        ...state,
        isAuthenticated: false,
      }
    default:
      return state
  }
}
