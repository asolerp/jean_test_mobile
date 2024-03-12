import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HOME_SCREEN_KEY, INVOICE_SCREEN_KEY } from '@src/screens/utils/keys'

import { HomeScreen } from '@src/screens/HomeScreen/HomeScreen'
import { InvoiceScreen } from '@src/screens/InvoiceScreen/InvoiceScreen'

const Stack = createNativeStackNavigator()

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={HOME_SCREEN_KEY} component={HomeScreen} />
      <Stack.Screen name={INVOICE_SCREEN_KEY} component={InvoiceScreen} />
    </Stack.Navigator>
  )
}
