import { renderHook, act } from '@testing-library/react-hooks'
import { useQuery, useMutation } from 'react-query'
import { useApi } from '@src/state/hooks/useApi'
import { useGetInvoice } from './useGetInvoice'
import { alertDeleteInvoice } from '../utils/alert'

jest.mock('react-query')
jest.mock('@src/state/hooks/useApi')
jest.mock('../utils/alert')
jest.mock('@src/navigation/utils/actions')

const mockUseApi = useApi as jest.Mock
const mockUseQuery = useQuery as jest.Mock
const mockUseMutation = useMutation as jest.Mock

describe('useGetInvoice', () => {
  beforeAll(() => {
    mockUseApi.mockReturnValue({
      getInvoice: jest.fn().mockResolvedValue({ data: { id: 1 } }),
      deleteInvoice: jest.fn().mockResolvedValue(undefined),
    })
    mockUseQuery.mockReturnValue({
      data: { id: 1 },
      isLoading: false,
      isError: false,
      error: undefined,
    })
    mockUseMutation.mockReturnValue({
      mutate: jest.fn(),
    })
  })

  it('should get invoice and handle delete correctly', () => {
    const { result } = renderHook(() => useGetInvoice({ invoiceId: '1' }))

    expect(result.current.invoice).toEqual({ id: 1 })
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(false)
    expect(result.current.error).toBeUndefined()

    act(() => {
      result.current.deleteInvoiceWithAlert()
    })

    expect(alertDeleteInvoice).toHaveBeenCalledWith(expect.any(Function))
  })
})
