import { View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'

export const WelcomeMessage = () => {
  return (
    <View>
      <Animated.Text
        className="font-normal text-2xl text-pennylaneSecondary"
        entering={FadeIn}
      >
        Welcome back!
      </Animated.Text>
      <Animated.Text
        className="font-bold text-2xl text-pennylaneSecondary"
        entering={FadeIn}
      >
        Pennylane 👋
      </Animated.Text>
    </View>
  )
}
