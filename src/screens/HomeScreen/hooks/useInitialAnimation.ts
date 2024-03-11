import { PENNYLANE_PRIMARY } from '@src/utils/colors'
import { useEffect, useState } from 'react'
import {
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export const useInitialAnimation = () => {
  const scale = useSharedValue(1)
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const animationState = useSharedValue(0)

  const [animationFinished, setAnimationFinished] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      translateX.value = 140
      translateY.value = -320
      scale.value = 0.7
    }, 1000)
  }, [translateX, translateY, scale])

  const handleAnimationFinished = () => {
    setAnimationFinished(true)
  }

  const animatedLogoStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(translateX.value, { duration: 1000 }, () => {
          animationState.value = withTiming(1, { duration: 1000 })
          runOnJS(handleAnimationFinished)()
        }),
      },
      {
        translateY: withTiming(translateY.value, { duration: 1000 }),
      },
      {
        scale: withTiming(scale.value, { duration: 1000 }),
      },
    ],
  }))

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        animationState.value,
        [0, 1],
        [PENNYLANE_PRIMARY, 'white'],
      ),
    }
  })

  return {
    animatedLogoStyle,
    animationFinished,
    setAnimationFinished,
    animatedBackgroundStyle,
  }
}
