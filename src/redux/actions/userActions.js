import { userActionTypes } from '../constants/actionConstants'

export const loginUser = ({ isAuthenticated = !!'' }) => ({
  type: userActionTypes.loginUser,
  isAuthenticated,
})

export const logoutUser = ({ isAuthenticated = !!'' }) => ({
  type: userActionTypes.logoutUser,
  isAuthenticated,
})

export const addUser = ({ email = '', password = '' }) => ({
  type: userActionTypes.addUser,
  email,
  password,
})
