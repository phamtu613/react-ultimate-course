import React from 'react'

interface SidebarContextProps {
  isCollapse: boolean,
  toggleCollapseSidebar: (isOpen: boolean) => void
}

export const SidebarContext = React.createContext<SidebarContextProps>({
  isCollapse: false,
  toggleCollapseSidebar: () => {}
});

function SidebarProvider( { children }: React.PropsWithChildren) {
  const [isCollapse, setIsCollapse] = React.useState(false);

  function toggleCollapseSidebar(isOpen: boolean) {
    setIsCollapse(isOpen)
  }

  return (
    <SidebarContext.Provider
      value={{
        isCollapse,
        toggleCollapseSidebar
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => React.useContext(SidebarContext);

export default SidebarProvider;

