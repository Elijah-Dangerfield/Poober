import React from 'react'

const UserContext = React.createContext({
  setUser: () => {},
  user: {}
})

export default UserContext
