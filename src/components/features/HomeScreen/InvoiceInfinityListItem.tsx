import { InvoiceType } from '@src/utils/types'
import { TouchableOpacity, View } from 'react-native'

import { Spacer } from '@src/components/common/Spacer'
import { formatCurrency } from 'react-native-format-currency'

import Clock from '@src/assets/icons/clock.svg'
import Deadline from '@src/assets/icons/deadline.svg'
import { openScreen } from '@src/navigation/utils/actions'
import { INVOICE_SCREEN_KEY } from '@src/screens/utils/keys'
import { CustomText } from '@src/components/common/CustomText'
import DollarIcon from '@src/assets/icons/dollar.svg'
import { PENNYLANE_SECONDARY } from '@src/utils/colors'
import { memo } from 'react'

type InvoiceListItemProps = {
  invoice: InvoiceType
}

const InvoiceInfinityListItem: React.FC<InvoiceListItemProps> = ({
  invoice,
}) => {
  const {
    customer: { first_name, last_name } = {},
    tax,
    date,
    paid,
    total,
    deadline,
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
      className="flex-row justify-between items-center"
    >
      <View className="flex-row">
        <View
          className={`p-3 rounded-md ${paid ? 'bg-pennylanePrimary' : 'bg-red-400'}  justify-center items-center`}
        >
          <DollarIcon
            width={15}
            height={15}
            fill={paid ? PENNYLANE_SECONDARY : 'white'}
          />
        </View>
        <Spacer size={1} isHorizontal />
        <View className="py-2">
          <CustomText
            className={`${finalized ? 'text-pennylaneSecondary' : 'text-red-600'}`}
          >
            {finalized ? 'Finalized' : 'Not finalized'}
          </CustomText>
          <CustomText size="extraLarge" weight="normal">
            {`${first_name} ${last_name}`}
          </CustomText>
          <View className="flex-row">
            <View className="flex-row items-center">
              <Clock width={15} height={15} />
              <Spacer size={0.5} isHorizontal />
              <CustomText size="small">{date as string}</CustomText>
            </View>
            <Spacer size={1} isHorizontal />
            <View className="flex-row items-center">
              <Deadline width={15} height={15} />
              <Spacer size={0.5} isHorizontal />
              <CustomText size="small">{deadline as string}</CustomText>
            </View>
          </View>
        </View>
      </View>
      <View className="items-end">
        <CustomText size="small">{`${taxWithoutSymbol} ${symbol} `}</CustomText>
        <CustomText size="extraLarge" weight="bold">
          {`${totalWithoutSymbol} ${symbol}`}
        </CustomText>
      </View>
    </TouchableOpacity>
  )
}

const areEqual = (
  prevProps: InvoiceListItemProps,
  nextProps: InvoiceListItemProps,
) => {
  return (
    prevProps.invoice.paid === nextProps.invoice.paid &&
    prevProps.invoice.finalized === nextProps.invoice.finalized
  )
}

export default memo(InvoiceInfinityListItem, areEqual)
