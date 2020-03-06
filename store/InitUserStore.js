import { useState } from 'react'

const userStoreGenerator = arr => ({
  user: arr[0],
  setUser: arr[1]
})

const initUserStore = () =>
  userStoreGenerator(
    useState({
      displayName: ''
    })
  )

export default initUserStore
