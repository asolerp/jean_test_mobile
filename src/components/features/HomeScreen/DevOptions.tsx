import { CustomButton } from '@src/components/common/CustomButton'
import { Spacer } from '@src/components/common/Spacer'

import Animated, { FadeIn } from 'react-native-reanimated'

type DevOptionsProps = {
  handlers: {
    testLoading: () => void
    testEmpty: () => void
    reset: () => void
  }
}

export const DevOptions: React.FC<DevOptionsProps> = ({ handlers }) => {
  const { testLoading, testEmpty, reset } = handlers

  return (
    <Animated.View testID="DevOptions" entering={FadeIn} className="flex-row">
      <CustomButton onPress={() => testLoading()}>Test loading</CustomButton>
      <Spacer size={1} isHorizontal />
      <CustomButton onPress={() => testEmpty()}>Test empty</CustomButton>
      <Spacer size={1} isHorizontal />
      <CustomButton onPress={() => reset()}>Reset</CustomButton>
    </Animated.View>
  )
}
