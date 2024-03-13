import { InvoiceType } from '@src/utils/types'
import { FlatList, RefreshControl, Text, View } from 'react-native'
import { InvoiceListItem } from './InvoiceListItem'
import { useCallback } from 'react'
import { Spacer } from '@src/components/common/Spacer'
import { InvoicesPlaceholder } from './InvoicesPlaceholder'

import { EmptyState } from './EmptyState'
import { CustomButton } from '@src/components/common/CustomButton'

type InvoiceInfinityListProps = {
  testingHandlers: {
    testLoading: () => void
    testEmpty: () => void
    reset: () => void
  }
  refetch: () => void
  isRefetching: boolean
  invoices: InvoiceType[] | undefined
  hasNextPage?: boolean
  isLoading?: boolean
  fetchNextPage: () => void
}

export const InvoiceInfinityList: React.FC<InvoiceInfinityListProps> = ({
  refetch,
  invoices,
  isLoading,
  hasNextPage,
  isRefetching,
  fetchNextPage,
  testingHandlers,
}) => {
  const renderItems = useCallback(({ item }: { item: InvoiceType }) => {
    return <InvoiceListItem invoice={item} />
  }, [])

  const renderItemSeparator = useCallback(() => {
    return <Spacer size={0.5} />
  }, [])

  const renderListEmptyComponent = useCallback(() => {
    if (isLoading) {
      return <InvoicesPlaceholder />
    }
    return <EmptyState />
  }, [isLoading])

  console.log('isRefetching', isRefetching)

  return (
    <View className="flex-1">
      <View>
        <View className="flex-row">
          <CustomButton onPress={() => testingHandlers?.testLoading()}>
            Test loading
          </CustomButton>
          <Spacer size={1} isHorizontal />
          <CustomButton onPress={() => testingHandlers?.testEmpty()}>
            Test empty
          </CustomButton>
          <Spacer size={1} isHorizontal />
          <CustomButton onPress={() => testingHandlers?.reset()}>
            Reset
          </CustomButton>
        </View>
        <Spacer size={2} />
        <Text className="text-xl font-semibold text-pennylaneSecondary">
          Your invoices
        </Text>
      </View>
      <Spacer size={1} />
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isRefetching || false}
            onRefresh={() => refetch()}
          />
        }
        data={invoices}
        keyExtractor={(_, index) => `invoice-${index}`}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderListEmptyComponent}
        ItemSeparatorComponent={renderItemSeparator}
        onEndReached={() => hasNextPage && fetchNextPage()}
        onEndReachedThreshold={0.1}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ paddingBottom: 150 }}
      />
    </View>
  )
}
