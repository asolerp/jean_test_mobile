import { Text } from 'react-native'

type CustomTextProps = {
  children: string
  className?: string
  size: 'small' | 'medium' | 'large' | 'extraLarge'
  weight: 'light' | 'normal' | 'semibold' | 'bold'
}

export const CustomText: React.FC<CustomTextProps> = ({
  size,
  weight,
  children,
  className,
}) => {
  const mapSize = {
    small: 'text-sm',
    medium: 'text-md',
    large: 'text-lg',
    extraLarge: 'text-xl',
  }

  const mapWeight = {
    light: 'font-light',
    normal: 'font-normal',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }

  return (
    <Text
      className={`${mapSize[size] + ' ' + mapWeight[weight] + ' ' + className}`}
    >
      {children}
    </Text>
  )
}
