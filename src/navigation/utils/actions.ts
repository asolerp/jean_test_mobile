import { StackActions } from '@react-navigation/native'
import { createRef } from 'react'
import { ScreenKeys, StackKeys, StackScreenKeys } from './types'

export const navigation = createRef<any>()
export const routeName: { current: string | undefined } = { current: '' }

export const popScreen = () => {
  if (navigation.current?.canGoBack()) {
    return navigation.current?.dispatch(StackActions.pop())
  }
  return
}

export const openScreen = <T extends ScreenKeys>(
  screenId: T,
  options: Record<string, any> = {},
) => {
  navigation.current?.navigate(screenId, options)
}

export const openStack = <T extends StackKeys, S extends StackScreenKeys[T]>(
  stackId: T,
  screenId?: S,
  options: Record<string, any> = {},
) => {
  navigation.current?.navigate(stackId, { screen: screenId, params: options })
}
