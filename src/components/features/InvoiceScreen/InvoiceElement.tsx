import { CustomText } from '@src/components/common/CustomText'
import { View } from 'react-native'

type InvoiceElementProps = {
  label?: string
  children: string
}

export const InvoiceElement: React.FC<InvoiceElementProps> = ({
  label,
  children,
}) => {
  return (
    <View>
      {label && (
        <CustomText size="medium" weight="normal">
          {label}
        </CustomText>
      )}
      <CustomText size="large" weight="semibold">
        {children}
      </CustomText>
    </View>
  )
}
