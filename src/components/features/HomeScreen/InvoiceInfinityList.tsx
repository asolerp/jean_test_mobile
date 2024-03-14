import { InvoiceType } from '@src/utils/types'
import { FlatList, Pressable, RefreshControl, Text, View } from 'react-native'
import InvoiceInfinityListItem from './InvoiceInfinityListItem'
import { useCallback } from 'react'
import { Spacer } from '@src/components/common/Spacer'
import { InvoicesPlaceholder } from './InvoicesPlaceholder'

import { EmptyState } from './EmptyState'

const LIST_PADDING_BOTTOM = 110

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
  onPressHidedOptions: () => void
}

export const InvoiceInfinityList: React.FC<InvoiceInfinityListProps> = ({
  refetch,
  invoices,
  isLoading,
  hasNextPage,
  isRefetching,
  fetchNextPage,
  onPressHidedOptions,
}) => {
  const renderItems = useCallback(({ item }: { item: InvoiceType }) => {
    return <InvoiceInfinityListItem invoice={item} />
  }, [])

  const renderItemSeparator = useCallback(() => {
    return <Spacer size={1} />
  }, [])

  const renderListEmptyComponent = useCallback(() => {
    if (isLoading) {
      return <InvoicesPlaceholder />
    }
    return <EmptyState />
  }, [isLoading])

  return (
    <View className="flex-1">
      <Pressable onPress={onPressHidedOptions}>
        <Text className="text-xl font-semibold text-pennylaneSecondary">
          Your invoices
        </Text>
      </Pressable>
      <Spacer size={3} />
      <FlatList
        testID="InvoiceInfinityList"
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
        onEndReachedThreshold={0.3}
        contentContainerStyle={{ paddingBottom: LIST_PADDING_BOTTOM }}
      />
    </View>
  )
}
