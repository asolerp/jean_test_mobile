import React from 'react'
import { render, fireEvent, act } from '@testing-library/react-native'
import { InvoiceScreen } from './InvoiceScreen'
import { useGetInvoice } from './hooks/useGetInvoice'

jest.mock('./hooks/useGetInvoice', () => ({
  useGetInvoice: jest.fn(),
}))

const mockUseGetInvoice = useGetInvoice as jest.Mock

describe('InvoiceScreen', () => {
  const route = { params: { invoiceId: '123' } }
  const mockInvoice = {
    total: 100,
    finalized: false,
    customer: {},
    date: '2021-10-10',
    deadline: '2021-11-10',
    invoice_lines: [{}],
  }

  it('shows loading state correctly', () => {
    mockUseGetInvoice.mockReturnValue({
      isLoading: true,
      deleteInvoiceWithAlert: jest.fn(),
      invoice: mockInvoice,
    })

    const { getByTestId } = render(<InvoiceScreen route={route} />)

    expect(getByTestId('LoadingIndicator')).toBeTruthy()
  })

  it('calls deleteInvoiceWithAlert correctly', () => {
    const deleteInvoiceWithAlert = jest.fn()

    mockUseGetInvoice.mockReturnValue({
      isLoading: false,
      deleteInvoiceWithAlert,
      invoice: mockInvoice,
    })

    const { getByTestId } = render(<InvoiceScreen route={route} />)

    act(() => {
      fireEvent.press(getByTestId('DeleteButton'))
    })

    expect(deleteInvoiceWithAlert).toHaveBeenCalled()
  })
})
