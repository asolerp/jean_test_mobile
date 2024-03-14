import { CustomText } from '@src/components/common/CustomText'
import { Spacer } from '@src/components/common/Spacer'
import { View } from 'react-native'
import { InvoiceElement } from './InvoiceElement'
import { Badge } from '@src/components/common/Badge'

type CustomerSectionProps = {
  paid: boolean
  customer: {
    first_name: string
    last_name: string
    address: string
    city: string
    country: string
  }
}

export const CustomerSection: React.FC<CustomerSectionProps> = ({
  paid,
  customer,
}) => {
  const { first_name, last_name, address, city, country } = customer || {}

  return (
    <View>
      <View className="flex-row items-center justify-between">
        <CustomText
          size="extraLarge"
          weight="semibold"
          className="text-pennylaneSecondary"
        >
          Customer
        </CustomText>
        <Badge state={paid ? 'success' : 'danger'}>
          {paid ? 'Paid' : 'Not paid'}
        </Badge>
      </View>
      <Spacer size={2} />
      <View className="flex-column">
        <InvoiceElement label="Name">
          {`${first_name} ${last_name}`}
        </InvoiceElement>
        <Spacer size={1} />
        <View className="flex-row">
          <InvoiceElement label="Address">{address}</InvoiceElement>
          <Spacer size={3} isHorizontal />
          <InvoiceElement label="City">{city}</InvoiceElement>
        </View>
        <Spacer size={1} />
        <View>
          <InvoiceElement label="Country">{country}</InvoiceElement>
        </View>
      </View>
    </View>
  )
}
