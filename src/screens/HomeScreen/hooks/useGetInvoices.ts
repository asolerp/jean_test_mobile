import { useFocusEffect } from '@react-navigation/native'
import { useApi } from '@src/state/hooks/useApi'
import { useCallback } from 'react'

import { useInfiniteQuery } from 'react-query'

const INITIAL_PAGE = 1
const ITEMS_PER_PAGE = 10

export const useGetInvoices = () => {
  const apiClient = useApi()

  // Utiliza useInfiniteQuery para cargar las facturas
  const {
    data,
    error,
    refetch,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    'invoices',
    async ({ pageParam = INITIAL_PAGE }) => {
      const response = await apiClient.getInvoices({
        page: pageParam,
        per_page: ITEMS_PER_PAGE,
      }) // Asegúrate de que este método acepte un parámetro de página y devuelva los datos en el formato correcto
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

  return {
    data,
    error,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  }
}
