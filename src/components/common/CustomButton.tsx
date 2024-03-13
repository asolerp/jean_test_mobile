import { TouchableOpacity } from 'react-native'
import { CustomText } from './CustomText'

type CustomButtonProps = {
  onPress?: () => void
  size?: 'small' | 'medium' | 'large'
  children: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  children,
  size = 'medium',
}) => {
  const mapSize = {
    small: 'p-1',
    medium: 'p-2',
    large: 'p-4',
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${mapSize[size]} p-2 bg-pennylaneSecondary justify-center items-center rounded-lg`}
    >
      <CustomText weight="semibold" className="text-white">
        {children}
      </CustomText>
    </TouchableOpacity>
  )
}
