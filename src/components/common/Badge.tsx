import { CustomText } from './CustomText'

type BadgeProps = {
  label: string
  state: 'danger' | 'success'
}

export const Badge: React.FC<BadgeProps> = ({ label, state = 'success' }) => {
  const mapTextColor = {
    success: 'text-green-900',
    danger: 'text-red-900',
  }

  return <CustomText className={`${mapTextColor[state]}`}>{label}</CustomText>
}
