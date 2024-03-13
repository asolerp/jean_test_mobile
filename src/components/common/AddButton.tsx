import { Text, TouchableOpacity } from 'react-native'

const BUTTON_SIZE = 70
const BOTTOM_POSITION = 20

type AddButtonProps = {
  containerWidth: number
  onPress: () => void
}

export const AddButton: React.FC<AddButtonProps> = ({
  containerWidth,
  onPress,
}) => {
  return (
    <TouchableOpacity
      testID="AddButton"
      onPress={onPress}
      style={{
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        bottom: BOTTOM_POSITION,
        right: containerWidth / 2 - BUTTON_SIZE / 2,
      }}
      className="absolute bg-pennylaneSecondary rounded-full justify-center items-center"
    >
      <Text className="text-white text-2xl">+</Text>
    </TouchableOpacity>
  )
}
