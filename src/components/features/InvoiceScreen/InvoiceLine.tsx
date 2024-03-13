import { CustomText } from '@src/components/common/CustomText'
import { View } from 'react-native'
import { formatCurrency } from 'react-native-format-currency'

type InvoiceLineProps = {
  label: string
  price: string
}

export const InvoiceLine: React.FC<InvoiceLineProps> = ({ label, price }) => {
  const [, priceWithoutSymbol, symbol] = formatCurrency({
    amount: Number(price),
    code: 'EUR',
  })

  return (
    <View className="flex-row justify-between">
      <CustomText size="medium" weight="normal">
        {label}
      </CustomText>
      <CustomText size="large" weight="bold">
        {`${priceWithoutSymbol} ${symbol}`}
      </CustomText>
    </View>
  )
}
