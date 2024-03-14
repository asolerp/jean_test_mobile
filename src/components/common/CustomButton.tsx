import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { CustomText } from './CustomText'
import { Sizes, Variants } from '@src/utils/types'

type CustomButtonProps = {
  onPress?: () => void
  loading?: boolean
  variant?: Variants
  size?: Sizes
  children: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  loading,
  children,
  size = Sizes.MEDIUM,
  variant = Variants.SUCCESS,
}) => {
  const mapBackgroundColor = {
    success: 'bg-pennylaneSecondary',
    danger: 'bg-red-400',
  }

  const mapSize = {
    small: 'p-1',
    medium: 'p-2',
    large: 'p-4',
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${mapSize[size]} p-2 ${mapBackgroundColor[variant]} justify-center items-center rounded-lg`}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <CustomText weight="semibold" className="text-white text-lg">
          {children}
        </CustomText>
      )}
    </TouchableOpacity>
  )
}
