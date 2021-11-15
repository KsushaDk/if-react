import { userActionTypes } from '../constants/actionConstants'

import { initialUserState } from '../constants/initialState'

export function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case userActionTypes.loginUser:
      return {
        ...state.user,
        isAuthenticated: true,
      }
    case userActionTypes.addUser:
      return {
        ...state.user,
        email: action.email,
        password: action.password,
      }
    case userActionTypes.logoutUser:
      return {
        ...state.user,
        isAuthenticated: false,
      }
    default:
      return state
  }
}
