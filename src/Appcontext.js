import React, { createContext, useState } from 'react'

export const AppContext = createContext()

function AppcontextProvider({ children }) {
  return (
    <div>
      <AppContext.Provider value={{}}>{children}</AppContext.Provider>
    </div>
  )
}

export default AppcontextProvider
