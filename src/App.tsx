import React from 'react'

import Config from 'react-native-config'

import { ApiProvider } from '@state/context/ApiContext'
import { RootNavigation } from '@navigation/RootNavigation'

const App = () => {
  return (
    <ApiProvider url={String(Config.API_URL)} token={String(Config.API_TOKEN)}>
      <RootNavigation />
    </ApiProvider>
  )
}

export default App
