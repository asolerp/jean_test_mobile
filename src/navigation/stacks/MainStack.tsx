import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HOME_SCREEN_KEY } from '@src/screens/utils/keys'

import { HomeScreen } from '@src/screens/HomeScreen/HomeScreen'

const Stack = createNativeStackNavigator()

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={HOME_SCREEN_KEY} component={HomeScreen} />
    </Stack.Navigator>
  )
}
