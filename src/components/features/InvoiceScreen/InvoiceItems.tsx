import { CustomText } from '@src/components/common/CustomText'
import { Spacer } from '@src/components/common/Spacer'
import { View } from 'react-native'
import { InvoiceLine } from './InvoiceLine'

type InvoiceItemsProps = {
  invoiceElements: {
    label: string
    price: string
  }[]
}

export const InvoiceItems: React.FC<InvoiceItemsProps> = ({
  invoiceElements,
}) => {
  console.log('invoiceElements', invoiceElements)

  return (
    <View>
      <CustomText
        size="extraLarge"
        weight="semibold"
        className="text-pennylaneSecondary"
      >
        Items
      </CustomText>
      <Spacer size={1} />
      {invoiceElements?.map((line, index) => {
        const { label, price } = line
        return (
          <View key={index}>
            <InvoiceLine label={label} price={price} />
          </View>
        )
      })}
    </View>
  )
}
