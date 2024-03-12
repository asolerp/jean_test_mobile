import { View } from 'react-native'

type SpacerProps = {
  size: number
  isHorizontal?: boolean
}

const UNIT_SIZE = 8

export const Spacer: React.FC<SpacerProps> = ({ size, isHorizontal }) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: isHorizontal ? 0 : size * UNIT_SIZE,
        width: isHorizontal ? size * UNIT_SIZE : 0,
      }}
    />
  )
}
