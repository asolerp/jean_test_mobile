import { Text, View } from 'react-native'
import ArrowLeft from '@assets/icons/arrow-left.svg'

type HeaderProps = {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View>
      <ArrowLeft />
      <Text>{title}</Text>
    </View>
  )
}
