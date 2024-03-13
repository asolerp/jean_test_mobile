import { InvoiceType } from '@src/utils/types'
import { Text, TouchableOpacity, View } from 'react-native'

import { Spacer } from '@src/components/common/Spacer'
import { formatCurrency } from 'react-native-format-currency'
import { Badge } from '@src/components/common/Badge'
import Clock from '@src/assets/icons/clock.svg'
import Deadline from '@src/assets/icons/deadline.svg'
import { openScreen } from '@src/navigation/utils/actions'
import { INVOICE_SCREEN_KEY } from '@src/screens/utils/keys'

type InvoiceListItemProps = {
  invoice: InvoiceType
}

export const InvoiceListItem: React.FC<InvoiceListItemProps> = ({
  invoice,
}) => {
  const {
    customer: { first_name, last_name } = {},
    date,
    deadline,
    total,
    tax,
    finalized,
  } = invoice

  const [, taxWithoutSymbol, symbol] = formatCurrency({
    amount: Number(tax),
    code: 'EUR',
  })
  const [, totalWithoutSymbol] = formatCurrency({
    amount: Number(total),
    code: 'EUR',
  })

  return (
    <TouchableOpacity
      onPress={() =>
        openScreen(INVOICE_SCREEN_KEY, {
          invoiceId: invoice.id,
        })
      }
      className="flex-row justify-between"
    >
      <View className="flex-row">
        <Spacer size={1} isHorizontal />
        <View className="py-2">
          <Badge
            label={finalized ? 'Finalized' : 'Not finalized'}
            state={finalized ? 'success' : 'danger'}
          />
          <Text className="text-lg">
            {first_name} {last_name}
          </Text>
          <View className="flex-row">
            <View className="flex-row items-center">
              <Clock width={15} height={15} />
              <Spacer size={0.5} isHorizontal />
              <Text className="text-xs">{date}</Text>
            </View>
            <Spacer size={1} isHorizontal />
            <View className="flex-row items-center">
              <Deadline width={15} height={15} />
              <Spacer size={0.5} isHorizontal />
              <Text className="text-xs">{deadline}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="items-end">
        <Text className="text-sm">
          {taxWithoutSymbol}
          {symbol}
        </Text>
        <Text className="font-bold text-xl">
          {totalWithoutSymbol}
          {symbol}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
