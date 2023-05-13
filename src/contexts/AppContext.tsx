import { ReactNode, createContext, useState } from 'react'

type User = {
  address: string
}

interface Context {
  user: User | null
  loggedIn: boolean
  login: (user: User) => void
}

export const AppContext = createContext<Context>({
  user: null,
  loggedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: () => {},
})
AppContext.displayName = 'Koin Context'

interface Props {
  children: ReactNode
}

const AppProvider = ({children}:Props) => {
  const [user, setUser] = useState<User | null>(null)
  const [loggedIn, setLoggedIn] = useState(false)

  const login = (user: User) => {
    setUser(user)
    setLoggedIn(true)
  }

  return (
    <AppContext.Provider value={{loggedIn, login, user}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider