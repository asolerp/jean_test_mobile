import { TouchableOpacity } from 'react-native'
import { CustomText } from './CustomText'

type CustomButtonProps = {
  onPress?: () => void
  children: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="p-2 bg-pennylaneSecondary justify-center items-center rounded-lg"
    >
      <CustomText className="text-white">{children}</CustomText>
    </TouchableOpacity>
  )
}
