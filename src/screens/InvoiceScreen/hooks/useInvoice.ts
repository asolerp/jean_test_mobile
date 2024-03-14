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

  const { mutate: updateInvoice, isLoading: isLoadingUpdate } = useMutation(
    'updateInvoice',
    async (body: any) => {
      const { paid, finalized } = body

      await apiClient.putInvoice(
        {
          id: Number(invoiceId),
        },
        {
          invoice: {
            id: Number(invoiceId),
            finalized: finalized === undefined ? invoice?.finalized : finalized,
            paid: paid === undefined ? invoice?.paid : paid,
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
    isLoadingUpdate,
    deleteInvoiceWithAlert,
  }
}
