import { Text, TouchableOpacity, View } from 'react-native'
import ArrowLeft from '@src/assets/icons/arrow-left.svg'
import { popScreen } from '@src/navigation/utils/actions'
import { GRAY_900 } from '@src/utils/colors'

type HeaderProps = {
  title?: string
  mode?: Mode.WHITE | Mode.DARK
  rightComponent?: React.ReactNode
}

export enum Mode {
  WHITE = 'white',
  DARK = 'dark',
}

export const Header: React.FC<HeaderProps> = ({
  title,
  mode = Mode.DARK,
  rightComponent,
}) => {
  return (
    <View className="flex-row items-center p-6 justify-between">
      <TouchableOpacity onPress={() => popScreen()}>
        <ArrowLeft
          testID="ArrowIcon"
          width={30}
          height={30}
          fill={mode === Mode.DARK ? GRAY_900 : 'white'}
        />
      </TouchableOpacity>
      <Text className="font-bol text-gray-900 text-2xl">{title}</Text>
      {rightComponent ? rightComponent : <View className="w-5" />}
    </View>
  )
}
