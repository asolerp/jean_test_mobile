import { InvoiceType } from '@src/utils/types'
import { FlatList, Text, View } from 'react-native'
import { InvoiceListItem } from './InvoiceListItem'
import { useCallback } from 'react'
import { Spacer } from '@src/components/common/Spacer'

type InvoiceInfinityListProps = {
  invoices: InvoiceType[] | undefined
  hasNextPage?: boolean
  fetchNextPage: () => void
}

export const InvoiceInfinityList: React.FC<InvoiceInfinityListProps> = ({
  invoices,
  hasNextPage,
  fetchNextPage,
}) => {
  const renderItems = useCallback(({ item }: { item: InvoiceType }) => {
    return <InvoiceListItem invoice={item} />
  }, [])

  const renderItemSeparator = useCallback(() => {
    return <Spacer size={2} />
  }, [])

  return (
    <View className="flex-1">
      <Text className="text-xl font-semibold text-pennylaneSecondary">
        Your invoices
      </Text>
      <Spacer size={2} />
      <FlatList
        data={invoices}
        keyExtractor={(_, index) => `invoice-${index}`}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderItemSeparator}
        onEndReached={() => hasNextPage && fetchNextPage()}
        onEndReachedThreshold={0.1}
      />
    </View>
  )
}
