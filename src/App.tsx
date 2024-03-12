import '../global.css'
import React, { useEffect } from 'react'

import Config from 'react-native-config'

import { ApiProvider } from '@state/context/ApiContext'
import { RootNavigation } from '@navigation/RootNavigation'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ApiProvider url={String(Config.API_URL)} token={String(Config.API_TOKEN)}>
      <RootNavigation />
    </ApiProvider>
  )
}

export default App
