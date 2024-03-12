import { PENNYLANE_SECONDARY } from '@src/utils/colors'
import { View, styled } from '@tamagui/core'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const NativeStyles = StyleSheet.create({
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

export const StyledInnerContainer = styled(SafeAreaView, {
  flex: 1,
  justifyContent: 'flex-start',
})

export const StyledLogoContainer = styled(View, {
  flex: 1,

  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
})
