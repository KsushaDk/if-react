import { userActionTypes } from '../constants/actionConstants'

export const loginUser = ({ isAuthenticated = !!'' }) => ({
  type: userActionTypes.loginUser,
  isAuthenticated: isAuthenticated,
})

export const logoutUser = ({ isAuthenticated = !!'' }) => ({
  type: userActionTypes.logoutUser,
  isAuthenticated: isAuthenticated,
})

export const addUser = ({ email = '', password = '' }) => ({
  type: userActionTypes.addUser,
  email: email,
  password: password,
})
