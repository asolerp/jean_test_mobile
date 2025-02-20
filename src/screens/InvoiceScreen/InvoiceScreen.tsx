import { Spacer } from '@src/components/common/Spacer'
import { Header, Mode } from '@src/components/layout/Header'
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useInvoice } from './hooks/useInvoice'

import { CustomerSection } from '@src/components/features/InvoiceScreen/CustomerSection'
import { DateSection } from '@src/components/features/InvoiceScreen/DateSection'
import { InvoiceItems } from '@src/components/features/InvoiceScreen/InvoiceItems'

import TrashIcon from '@src/assets/icons/trash.svg'
import { TopSection } from '@src/components/features/InvoiceScreen/TopSection'

import { Components } from '@src/api/generated/client'
import { BottomActions } from '@src/components/features/InvoiceScreen/BottomActions'

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
    updateInvoice,
    isLoadingUpdate,
    deleteInvoiceWithAlert,
    invoice: {
      total,
      finalized,
      customer,
      date,
      deadline,
      invoice_lines,
      paid,
    } = {},
  } = useInvoice({
    invoiceId,
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
      <View className="bg-pennylaneSecondary h-[210px]">
        <Spacer size={4} />
        <Header
          mode={Mode.WHITE}
          rightComponent={
            !finalized &&
            !isLoading && (
              <TouchableOpacity
                testID="DeleteButton"
                onPress={deleteInvoiceWithAlert}
              >
                <TrashIcon width={20} height={20} fill="white" />
              </TouchableOpacity>
            )
          }
        />
        <TopSection total={total} isLoading={isLoading} finalized={finalized} />
        <Spacer size={2} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="p-6 flex-grow"
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
        }}
      >
        {isLoading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator testID="LoadingIndicator" size="large" />
          </View>
        ) : (
          <View>
            <CustomerSection
              paid={paid as boolean}
              customer={customer as Components.Schemas.Customer}
            />
            <Spacer size={4} />
            <DateSection date={date as string} deadline={deadline as string} />
            <Spacer size={4} />
            {invoice_lines && <InvoiceItems invoiceElements={invoice_lines} />}
          </View>
        )}
      </ScrollView>
      <BottomActions
        isLoading={isLoading}
        isLoadingUpdate={isLoadingUpdate}
        finalized={finalized as boolean}
        paid={paid as boolean}
        updateInvoice={updateInvoice}
      />
    </SafeAreaView>
  )
}
