import React, { createContext, useState } from 'react'

export const NavContext = createContext()

export function NavProvider({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <NavContext.Provider value={{ mobileOpen, setMobileOpen }}>
      {children}
    </NavContext.Provider>
  )
}