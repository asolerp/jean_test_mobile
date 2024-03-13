import { Spacer } from '@src/components/common/Spacer'
import { Header, Mode } from '@src/components/layout/Header'
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetInvoice } from './hooks/useGetInvoice'
import { formatCurrency } from 'react-native-format-currency'

import { CustomerSection } from '@src/components/features/InvoiceScreen/CustomerSection'
import { DateSection } from '@src/components/features/InvoiceScreen/DateSection'
import { InvoiceItems } from '@src/components/features/InvoiceScreen/InvoiceItems'

import TrashIcon from '@src/assets/icons/trash.svg'

type InvoiceScreenProps = {
  route: {
    params: {
      invoiceId: string
    }
  }
}

export const InvoiceScreen: React.FC<InvoiceScreenProps> = ({ route }) => {
  const invoiceId = route?.params?.invoiceId
  const {
    isLoading,
    deleteInvoiceWithAlert,
    invoice: { total, finalized, customer, date, deadline, invoice_lines } = {},
  } = useGetInvoice({
    invoiceId,
  })

  const [, totalWithoutSymbol, symbol] = formatCurrency({
    amount: Number(total),
    code: 'EUR',
  })

  return (
    <SafeAreaView
      edges={['bottom']}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <View className="bg-pennylaneSecondary h-[250px]">
        <Spacer size={4} />
        <Header
          mode={Mode.WHITE}
          rightComponent={
            !finalized && (
              <TouchableOpacity onPress={deleteInvoiceWithAlert}>
                <TrashIcon width={20} height={20} fill="white" />
              </TouchableOpacity>
            )
          }
        />
        <View className="items-center">
          <View
            className={`${finalized ? 'bg-pennylanePrimary' : 'bg-red-600'}  w-28 rounded-xl p-2 justify-center items-center`}
          >
            <Text
              className={`${finalized ? 'text-pennylaneSecondary' : 'text-red-100'} text-sm`}
            >
              {finalized ? 'Finalized' : 'Not finalized'}
            </Text>
          </View>
          <Spacer size={2} />
          <Text className="text-pennylanePrimary font-extrabold text-4xl">
            {totalWithoutSymbol}
            {symbol}
          </Text>
        </View>
        <Spacer size={2} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="p-6 flex-1"
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
        }}
      >
        {isLoading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator />
          </View>
        ) : (
          <View>
            <CustomerSection customer={customer} />
            <Spacer size={4} />
            <DateSection date={date as string} deadline={deadline as string} />
            <Spacer size={4} />
            {invoice_lines && <InvoiceItems invoiceElements={invoice_lines} />}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
