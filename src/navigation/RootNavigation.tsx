import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MAIN_STACK_KEY } from './utils/keys'
import { MainStack } from './stacks/MainStack'
import { navigation as navigationRef } from './utils/actions'
import { NEW_INVOICE_SCREEN_KEY } from '@src/screens/utils/keys'
import { NewInvoiceScreen } from '@src/screens/NewInvoiceScreen/NewInvoiceScreen'

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
        }}
      >
        <Stack.Screen name={MAIN_STACK_KEY} component={MainStack} />
        <Stack.Screen
          name={NEW_INVOICE_SCREEN_KEY}
          component={NewInvoiceScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
