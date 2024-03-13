import { popScreen } from '@src/navigation/utils/actions'
import { useApi } from '@src/state/hooks/useApi'

import { useQuery, useMutation } from 'react-query'
import { alertDeleteInvoice } from '../utils/alert'

export const useGetInvoice = ({ invoiceId }: { invoiceId: string }) => {
  const apiClient = useApi()

  const {
    data: invoice,
    isLoading,
    isError,
    error,
  } = useQuery(
    ['invoice', invoiceId],
    async () => {
      const response = await apiClient.getInvoice({
        id: Number(invoiceId),
      })
      return response.data
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

  const deleteInvoiceWithAlert = () => {
    alertDeleteInvoice(() => deleteInvoice())
  }

  return {
    error,
    isError,
    invoice,
    isLoading,
    deleteInvoiceWithAlert,
  }
}
