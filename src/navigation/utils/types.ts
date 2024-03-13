import {
  HOME_SCREEN_KEY,
  INVOICE_SCREEN_KEY,
  NEW_INVOICE_SCREEN_KEY,
} from '@src/screens/utils/keys'
import { MAIN_STACK_KEY } from './keys'
import { InvoiceType } from '@src/utils/types'

export type RoutingData<T> = { routingData: T }
export type StackParams<T> = { params: T }

export type RootStackParamList = {
  [MAIN_STACK_KEY]: any
}

//@TODO: move to Main.tsx stack after migration
export type MainStackParamList = {
  [HOME_SCREEN_KEY]: any
  [INVOICE_SCREEN_KEY]: {
    invoice: InvoiceType
  }
}

export type ModalStackParamList = {
  [NEW_INVOICE_SCREEN_KEY]: any
}

export type StackScreenKeys = {
  [MAIN_STACK_KEY]: keyof MainStackParamList
}

export type ScreenKeys = keyof MainStackParamList | keyof ModalStackParamList

export type StackKeys = keyof {
  [K in typeof MAIN_STACK_KEY]: K
}
