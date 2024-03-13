import { CustomText } from '@src/components/common/CustomText'
import { View } from 'react-native'
import { InvoiceElement } from './InvoiceElement'
import { DEFAULT_INVOICE_FORMAT } from '@src/utils/dates'
import { Spacer } from '@src/components/common/Spacer'
import { format } from 'date-fns'

type DateSectionProps = {
  date: string
  deadline: string
}

export const DateSection: React.FC<DateSectionProps> = ({ date, deadline }) => {
  return (
    <View className="flex-row">
      <View>
        <CustomText
          size="extraLarge"
          weight="semibold"
          className="text-pennylaneSecondary"
        >
          Invoice date
        </CustomText>
        <InvoiceElement>
          {format(new Date(date as string), DEFAULT_INVOICE_FORMAT) as string}
        </InvoiceElement>
      </View>
      <Spacer size={4} isHorizontal />
      <View>
        <CustomText
          size="extraLarge"
          weight="semibold"
          className="text-pennylaneSecondary"
        >
          Deadline
        </CustomText>
        <InvoiceElement>
          {
            format(
              new Date(deadline as string),
              DEFAULT_INVOICE_FORMAT,
            ) as string
          }
        </InvoiceElement>
      </View>
    </View>
  )
}
