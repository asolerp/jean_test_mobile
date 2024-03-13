import { CustomText } from '@src/components/common/CustomText'
import { Spacer } from '@src/components/common/Spacer'
import { View } from 'react-native'
import { InvoiceLine } from './InvoiceLine'

type InvoiceItemsProps = {
  invoiceElements: {
    label: string
    price: string
    tax: string
  }[]
}

export const InvoiceItems: React.FC<InvoiceItemsProps> = ({
  invoiceElements,
}) => {
  return (
    <View>
      <CustomText
        size="extraLarge"
        weight="semibold"
        className="text-pennylaneSecondary"
      >
        Items
      </CustomText>
      <Spacer size={2} />
      <View className="flex-row justify-between items-center">
        <CustomText size="medium" weight="normal">
          Description
        </CustomText>
        <CustomText size="small" weight="normal">
          Tax
        </CustomText>
        <CustomText size="medium" weight="normal">
          Price
        </CustomText>
      </View>
      <Spacer size={2} />
      {invoiceElements?.map((line, index) => {
        const { label, price, tax } = line
        return (
          <View key={index}>
            <InvoiceLine label={label} price={price} tax={tax} />
          </View>
        )
      })}
    </View>
  )
}
