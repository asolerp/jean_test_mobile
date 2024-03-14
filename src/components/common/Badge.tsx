import { View } from 'react-native'
import { CustomText } from './CustomText'

type BadgeProps = {
  children: string
  state: 'danger' | 'success'
}

export const Badge: React.FC<BadgeProps> = ({
  state = 'success',
  children,
}) => {
  const mapBackgroundColor = {
    success: 'bg-pennylanePrimary',
    danger: 'bg-red-400',
  }

  const mapTextColor = {
    success: 'text-green-900',
    danger: 'text-white',
  }

  return (
    <View className={`px-4 py-2 ${mapBackgroundColor[state]} rounded-lg`}>
      <CustomText className={`${mapTextColor[state]} font-semibold`}>
        {children}
      </CustomText>
    </View>
  )
}
