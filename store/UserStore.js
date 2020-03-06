import UserContext from '../context/UserContext'
import { useContext } from 'react'

const useUserStore = () => useContext(UserContext)

export default useUserStore
