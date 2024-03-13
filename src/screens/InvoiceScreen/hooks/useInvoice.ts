import { popScreen } from '@src/navigation/utils/actions'
import { useApi } from '@src/state/hooks/useApi'

import { useQuery, useMutation } from 'react-query'
import { alertDeleteInvoice } from '../utils/alert'
import { InvoiceType } from '@src/utils/types'

export const useInvoice = ({ invoiceId }: { invoiceId: string }) => {
  const apiClient = useApi()

  const {
    data: invoice,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(
    ['invoice', invoiceId],
    async () => {
      const response = await apiClient.getInvoice({
        id: Number(invoiceId),
      })
      return response.data as InvoiceType
    },
    { initialData: undefined },
  )

  const { mutate: deleteInvoice } = useMutation(
    'deleteInvoice',
    async () => {
      await apiClient.deleteInvoice({
        id: Number(invoiceId),
      })
    },
    {
      onSuccess: () => {
        popScreen()
      },
    },
  )

  const { mutate: updateInvoice } = useMutation(
    'updateInvoice',
    async (finalizeStatus: boolean) => {
      await apiClient.putInvoice(
        {
          id: Number(invoiceId),
        },
        {
          invoice: {
            id: Number(invoiceId),
            finalized: finalizeStatus,
          },
        },
      )
    },
    {
      onSuccess: () => refetch(),
    },
  )

  const deleteInvoiceWithAlert = () => {
    alertDeleteInvoice(() => deleteInvoice())
  }

  return {
    error,
    isError,
    invoice,
    isLoading,
    updateInvoice,
    deleteInvoiceWithAlert,
  }
}
