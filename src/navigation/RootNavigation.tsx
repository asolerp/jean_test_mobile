import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MAIN_STACK_KEY } from './utils/keys'
import { MainStack } from './stacks/MainStack'
import { navigation as navigationRef } from './utils/actions'

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={MAIN_STACK_KEY} component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
