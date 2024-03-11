import Animated, { FadeIn } from 'react-native-reanimated'
import { useInitialAnimation } from './hooks/useInitialAnimation'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AddButton } from '@components/common/AddButton'
import { View, styled } from '@tamagui/core'
import { StyleSheet } from 'react-native'
import { PENNYLANE_SECONDARY } from '@utils/colors'

export const HomeScreen = () => {
  const { animatedLogoStyle, animatedBackgroundStyle, animationFinished } =
    useInitialAnimation()

  return (
    <Animated.View style={[NativeStyles.wrapper, animatedBackgroundStyle]}>
      <StyledInnerContainer>
        <StyledLogoContainer>
          <Animated.Image
            style={[NativeStyles.logo, animatedLogoStyle]}
            source={require('../../assets/penny_logo.png')}
          />
        </StyledLogoContainer>
        {animationFinished && (
          <View flex={1}>
            <View>
              <Animated.Text
                style={[NativeStyles.welcomeText]}
                entering={FadeIn}
              >
                Welcome back!
              </Animated.Text>
              <Animated.Text style={[NativeStyles.boldText]} entering={FadeIn}>
                Pennylane 👋
              </Animated.Text>
            </View>
            <AddButton />
          </View>
        )}
      </StyledInnerContainer>
    </Animated.View>
  )
}

const NativeStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 24,
  },
  logo: {
    width: 126,
    height: 126,
  },
  welcomeText: {
    fontSize: 16,
    color: PENNYLANE_SECONDARY,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: PENNYLANE_SECONDARY,
  },
})

const StyledInnerContainer = styled(SafeAreaView, {
  flex: 1,
  justifyContent: 'flex-start',
})

const StyledLogoContainer = styled(View, {
  flex: 1,

  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
})
