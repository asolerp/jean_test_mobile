import { View } from 'react-native'
import EmptyStateIllustration from '@src/assets/empty_state.svg'
import { CustomText } from '@src/components/common/CustomText'

export const EmptyState = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <EmptyStateIllustration width={300} height={200} />
      <CustomText
        size="extraLarge3"
        weight="bold"
        className="text-pennylaneSecondary"
      >
        No invoices found
      </CustomText>
      <CustomText
        size="large"
        weight="normal"
        className="text-pennylaneSecondary"
      >
        Create your first invoice
      </CustomText>
    </View>
  )
}
