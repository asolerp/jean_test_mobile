import { Text, TouchableOpacity, View } from 'react-native'
import ArrowLeft from '@src/assets/icons/arrow-left.svg'
import { popScreen } from '@src/navigation/utils/actions'
import { GRAY_900 } from '@src/utils/colors'

type HeaderProps = {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View className="flex-row items-center p-6 justify-between">
      <TouchableOpacity onPress={() => popScreen()}>
        <ArrowLeft width={30} height={30} fill={GRAY_900} />
      </TouchableOpacity>
      <Text className="font-bol text-gray-900 text-2xl">{title}</Text>
      <View className="w-5" />
    </View>
  )
}
