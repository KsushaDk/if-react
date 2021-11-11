import { createContext } from 'react'

export const defaultUserContext = {
  user: {},
  isAuthenticated: false,
}

export const UserContext = createContext({
  ...defaultUserContext,
  signIn: () => {},
  signOut: () => {},
})
