import { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'

export const useApi = () => {
  const { client } = useContext(ApiContext)

  if (!client) {
    throw new Error('A client API must be defined')
  }

  return client
}
