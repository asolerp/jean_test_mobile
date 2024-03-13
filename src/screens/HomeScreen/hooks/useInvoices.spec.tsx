import { renderHook, act } from '@testing-library/react-hooks'
import { useInvoices } from './useInvoices'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
}))

jest.mock('@src/state/hooks/useApi', () => ({
  useApi: () => ({
    getInvoices: jest.fn().mockResolvedValue({
      data: {
        pagination: {
          page: 1,
          total_pages: 2,
        },
        data: [
          { id: '1', title: 'Invoice 1' },
          { id: '2', title: 'Invoice 2' },
        ],
      },
    }),
  }),
}))

const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useInvoices', () => {
  it('fetches invoices and exposes the state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useInvoices(), {
      wrapper,
    })

    expect(result.current.isLoading).toBe(true)

    // Wait for the hook's async actions to complete
    await waitForNextUpdate()

    expect(result.current.isLoading).toBe(false)
    expect(result.current.data).toEqual({
      pageParams: [undefined],
      pages: [
        {
          pagination: {
            page: 1,
            total_pages: 2,
          },
          data: [
            { id: '1', title: 'Invoice 1' },
            { id: '2', title: 'Invoice 2' },
          ],
        },
      ],
    })
  })

  it('toggles loading test', () => {
    const { result } = renderHook(() => useInvoices(), {
      wrapper,
    })

    act(() => {
      result.current.toggleLoadingTest()
    })

    expect(result.current.isLoadingTestActive).toBe(true)
  })

  it('toggles empty test', () => {
    const { result } = renderHook(() => useInvoices(), {
      wrapper,
    })

    act(() => {
      result.current.toggleEmptyTest()
    })

    expect(result.current.isEmptyTestActive).toBe(true)
  })

  it('resets the tests', () => {
    const { result } = renderHook(() => useInvoices(), {
      wrapper,
    })

    act(() => {
      result.current.toggleEmptyTest()
      result.current.toggleLoadingTest()
      result.current.reset()
    })

    expect(result.current.isEmptyTestActive).toBe(false)
    expect(result.current.isLoadingTestActive).toBe(false)
  })

  it('fetches next page of invoices when fetchNextPage is called', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useInvoices(), {
      wrapper,
    })

    // Initial fetch
    await waitForNextUpdate()

    act(() => {
      result.current.fetchNextPage()
    })

    // Wait for the next page fetch to complete
    await waitForNextUpdate()

    expect(result.current.hasNextPage).toBe(true)
    expect(result?.current?.data?.pages).toHaveLength(2)
  })
})
