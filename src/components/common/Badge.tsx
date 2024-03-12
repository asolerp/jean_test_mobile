import { Text } from 'react-native'

type BadgeProps = {
  label: string
  state: 'danger' | 'success'
}

export const Badge: React.FC<BadgeProps> = ({ label, state = 'success' }) => {
  const mapTextColor = {
    success: 'text-green-900',
    danger: 'text-red-900',
  }

  return <Text className={`text-xs ${mapTextColor[state]} w-fit`}>{label}</Text>
}
