import { useFocusEffect } from '@react-navigation/native'
import { useApi } from '@src/state/hooks/useApi'
import { useCallback, useState } from 'react'

import { useInfiniteQuery } from 'react-query'

const INITIAL_PAGE = 1
const ITEMS_PER_PAGE = 10

export const useInvoices = () => {
  const [isLoadingTestActive, setIsLoadingTestActive] = useState(false)
  const [isEmptyTestActive, setIsEmptyTestActive] = useState(false)

  const apiClient = useApi()

  const {
    data,
    error,
    refetch,
    isError,
    isLoading,
    hasNextPage,
    isRefetching,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    'invoices',
    async ({ pageParam = INITIAL_PAGE }) => {
      const response = await apiClient.getInvoices({
        page: pageParam,
        per_page: ITEMS_PER_PAGE,
      })
      return response.data
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.pagination.page < lastPage.pagination.total_pages) {
          return lastPage.pagination.page + 1
        } else {
          return undefined
        }
      },
    },
  )

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch]),
  )

  const toggleLoadingTest = () => {
    setIsLoadingTestActive(!isLoadingTestActive)
    setIsEmptyTestActive(false)
  }

  const toggleEmptyTest = () => {
    setIsLoadingTestActive(false)
    setIsEmptyTestActive(!isEmptyTestActive)
  }

  const reset = () => {
    setIsLoadingTestActive(false)
    setIsEmptyTestActive(false)
  }

  return {
    error,
    reset,
    isError,
    refetch,
    hasNextPage,
    isRefetching,
    fetchNextPage,
    toggleEmptyTest,
    toggleLoadingTest,
    isEmptyTestActive,
    isFetchingNextPage,
    isLoadingTestActive,
    isLoading: isLoadingTestActive ? true : isLoading,
    data: isEmptyTestActive || isLoadingTestActive ? { pages: [] } : data,
  }
}
