import { CustomInput } from '@src/components/common/CustomInput'
import { Spacer } from '@src/components/common/Spacer'
import { Header } from '@src/components/layout/Header'
import { SafeAreaView, View } from 'react-native'

export const NewInvoiceScreen = () => {
  return (
    <SafeAreaView>
      <Header title="Create Invoice" />
      <Spacer size={4} />
      <View className="px-6">
        <CustomInput label="Client name" placeholder="Type something..." />
      </View>
    </SafeAreaView>
  )
}
