import type { IUser } from '@/types/user';
import React from 'react'

interface AppContextProps {
  user: IUser | null,
  updateUser: (data: IUser | null) => void
}

export const AppContext = React.createContext<AppContextProps>({
  user: null,
  updateUser: () => {}
});

function AppProvider( { children }: React.PropsWithChildren) {
  const [user, setUser] = React.useState<IUser |null>(null);

  function updateUser(data: IUser | null = null) {
    setUser(data)
  }

  return (
    <AppContext.Provider
      value={{
        user,
        updateUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);

export default AppProvider;

