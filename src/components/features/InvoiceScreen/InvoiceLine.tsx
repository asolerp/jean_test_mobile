import { CustomText } from '@src/components/common/CustomText'
import { View } from 'react-native'
import { formatCurrency } from 'react-native-format-currency'

type InvoiceLineProps = {
  label: string
  price: string
  tax: string
}

export const InvoiceLine: React.FC<InvoiceLineProps> = ({
  label,
  price,
  tax,
}) => {
  const [, taxWithoutSymbol] = formatCurrency({
    amount: Number(tax),
    code: 'EUR',
  })

  const [, priceWithoutSymbol, symbol] = formatCurrency({
    amount: Number(price),
    code: 'EUR',
  })

  return (
    <View className="flex-row justify-between items-center">
      <CustomText size="medium" weight="bold" className="w-32">
        {label}
      </CustomText>
      <CustomText size="medium" weight="bold" className="text-right w-32 ">
        {`${taxWithoutSymbol} ${symbol}`}
      </CustomText>
      <CustomText size="large" weight="bold" className="w-32  text-right">
        {`${priceWithoutSymbol} ${symbol}`}
      </CustomText>
    </View>
  )
}
