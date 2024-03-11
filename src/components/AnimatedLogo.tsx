import { View } from 'react-native'
import Animated from 'react-native-reanimated'

type AnimatedLogoProps = {
  animatedStyles: any
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  animatedStyles,
}) => {
  return (
    <View className="flex-1 justify-center items-center bg-pennylanePrimary">
      <Animated.Image
        style={[animatedStyles]}
        source={require('../../assets/penny_logo.png')}
        className="w-[126px] h-[126px]"
      />
    </View>
  )
}
