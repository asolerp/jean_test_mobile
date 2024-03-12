import { Text, TextInput, View } from 'react-native'
import { Spacer } from './Spacer'

type CustomInputProps = {
  label: string
  mandatory?: boolean
  placeholder: string
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  mandatory = true,
  placeholder,
}) => {
  return (
    <View>
      <Text className="text-lg text-gray-500">
        {label}{' '}
        <Text className="text-pennylaneSecondary">{mandatory && '*'}</Text>
      </Text>
      <Spacer size={1} />
      <TextInput
        placeholder={placeholder}
        className="bg-gray-200 p-6 rounded-lg text-xl"
      />
    </View>
  )
}
