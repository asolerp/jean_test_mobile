import { DUMMY_SCREEN_KEY } from '@src/screens/utils/keyts'
import { MAIN_STACK_KEY } from './keys'

export type RoutingData<T> = { routingData: T }
export type StackParams<T> = { params: T }

export type RootStackParamList = {
  [MAIN_STACK_KEY]: any
}

//@TODO: move to Main.tsx stack after migration
export type MainStackParamList = {
  [DUMMY_SCREEN_KEY]: any
}

export type StackScreenKeys = {
  [MAIN_STACK_KEY]: keyof MainStackParamList
}

export type ScreenKeys = keyof MainStackParamList

export type StackKeys = keyof {
  [K in typeof MAIN_STACK_KEY]: K
}
