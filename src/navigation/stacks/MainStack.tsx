import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DUMMY_SCREEN_KEY } from '@screens/utils/keyts'
import Dummy from '@screens/DummyScreen/Dummy'

const Stack = createNativeStackNavigator()

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={DUMMY_SCREEN_KEY} component={Dummy} />
    </Stack.Navigator>
  )
}
