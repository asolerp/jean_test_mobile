import React, { useEffect } from 'react'

import Config from 'react-native-config'

import { ApiProvider } from '@state/context/ApiContext'
import { RootNavigation } from '@navigation/RootNavigation'
import SplashScreen from 'react-native-splash-screen'
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'

export const tamaguiConfig = createTamagui(config)

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ApiProvider url={String(Config.API_URL)} token={String(Config.API_TOKEN)}>
      <TamaguiProvider config={tamaguiConfig}>
        <RootNavigation />
      </TamaguiProvider>
    </ApiProvider>
  )
}

export default App
