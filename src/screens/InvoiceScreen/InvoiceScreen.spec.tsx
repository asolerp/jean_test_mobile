import React from 'react'
import { render, fireEvent, act } from '@testing-library/react-native'
import { InvoiceScreen } from './InvoiceScreen'
import { useInvoice } from './hooks/useInvoice'

jest.mock('./hooks/useInvoice', () => ({
  useInvoice: jest.fn(),
}))

const mockUseInvoice = useInvoice as jest.Mock

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
    mockUseInvoice.mockReturnValue({
      isLoading: true,
      deleteInvoiceWithAlert: jest.fn(),
      invoice: mockInvoice,
    })

    const { getByTestId } = render(<InvoiceScreen route={route} />)

    expect(getByTestId('LoadingIndicator')).toBeTruthy()
  })

  it('calls deleteInvoiceWithAlert correctly', () => {
    const deleteInvoiceWithAlert = jest.fn()

    mockUseInvoice.mockReturnValue({
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
