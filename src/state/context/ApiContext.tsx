import React, { ReactNode, createContext, useRef } from 'react'
import OpenAPIClientAxios from 'openapi-client-axios'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Client } from '../../api/generated/client'
import definition from '../../api/generated/schema.json'

interface ApiContextState {
  client: Client | undefined
}

export const ApiContext = createContext<ApiContextState>({
  client: undefined,
})

interface ApiProviderProps {
  url: string
  token: string
  children?: ReactNode
}

export const ApiProvider: React.FC<ApiProviderProps> = ({
  url,
  token,
  children,
}) => {
  const apiRef = useRef(
    new OpenAPIClientAxios({
      /* @ts-ignore */
      definition,
      withServer: { url },
      axiosConfigDefaults: {
        headers: {
          'X-SESSION': token,
        },
      },
    }),
  )
  const clientRef = useRef(apiRef.current.initSync<Client>())

  // QueryClient for React Query
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ApiContext.Provider value={{ client: clientRef.current }}>
        {children}
      </ApiContext.Provider>
    </QueryClientProvider>
  )
}
