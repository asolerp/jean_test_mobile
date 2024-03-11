import { PENNYLANE_SECONDARY } from '@src/utils/colors'
import { Text, View, styled } from '@tamagui/core'
import { Dimensions } from 'react-native'

const BUTTON_SIZE = 70
const WINDOW_WIDTH = Dimensions.get('window').width

export const AddButton = () => {
  return (
    <StyledContainer className="absolute  bg-pennylaneSecondary rounded-full justify-center items-center">
      <StyledText className="text-white text-2xl">+</StyledText>
    </StyledContainer>
  )
}

const StyledContainer = styled(View, {
  position: 'absolute',
  backgroundColor: PENNYLANE_SECONDARY,
  borderRadius: BUTTON_SIZE / 2,
  justifyContent: 'center',
  alignItems: 'center',
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  left: WINDOW_WIDTH / 2 - 55,
  bottom: 0,
})

const StyledText = styled(Text, {
  color: 'white',
  fontSize: 24,
})
