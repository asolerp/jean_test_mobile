import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { InvoiceInfinityList } from './InvoiceInfinityList'

const mockFetchNextPage = jest.fn()
const mockRefetch = jest.fn()
const mockOnPressHidedOptions = jest.fn()

describe('InvoiceInfinityList', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <InvoiceInfinityList
        testingHandlers={{
          testLoading: jest.fn(),
          testEmpty: jest.fn(),
          reset: jest.fn(),
        }}
        refetch={mockRefetch}
        isRefetching={false}
        invoices={[]}
        hasNextPage={true}
        isLoading={false}
        fetchNextPage={mockFetchNextPage}
        onPressHidedOptions={mockOnPressHidedOptions}
      />,
    )

    expect(getByText('Your invoices')).toBeTruthy()
  })

  it('calls fetchNextPage when end is reached', () => {
    const { getByTestId } = render(
      <InvoiceInfinityList
        testingHandlers={{
          testLoading: jest.fn(),
          testEmpty: jest.fn(),
          reset: jest.fn(),
        }}
        refetch={mockRefetch}
        isRefetching={false}
        invoices={[]}
        hasNextPage={true}
        isLoading={false}
        fetchNextPage={mockFetchNextPage}
        onPressHidedOptions={mockOnPressHidedOptions}
      />,
    )

    fireEvent(getByTestId('InvoiceInfinityList'), 'onEndReached')

    expect(mockFetchNextPage).toHaveBeenCalled()
  })

  it('renders InvoicesPlaceholder when isLoading is true', () => {
    const { getByTestId } = render(
      <InvoiceInfinityList
        testingHandlers={{
          testLoading: jest.fn(),
          testEmpty: jest.fn(),
          reset: jest.fn(),
        }}
        refetch={mockRefetch}
        isRefetching={false}
        invoices={[]}
        hasNextPage={true}
        isLoading={true}
        fetchNextPage={mockFetchNextPage}
        onPressHidedOptions={mockOnPressHidedOptions}
      />,
    )

    expect(getByTestId('InvoicesPlaceholder')).toBeTruthy()
  })

  it('renders EmptyState when isLoading is false and there are no invoices', () => {
    const { getByTestId } = render(
      <InvoiceInfinityList
        testingHandlers={{
          testLoading: jest.fn(),
          testEmpty: jest.fn(),
          reset: jest.fn(),
        }}
        refetch={mockRefetch}
        isRefetching={false}
        invoices={[]}
        hasNextPage={false}
        isLoading={false}
        fetchNextPage={mockFetchNextPage}
        onPressHidedOptions={mockOnPressHidedOptions}
      />,
    )

    expect(getByTestId('EmptyState')).toBeTruthy()
  })

  //   it('renders invoice list items when there are invoices', () => {
  //     const mockInvoices = [
  //       { id: '1', title: 'Invoice 1' },
  //       { id: '2', title: 'Invoice 2' },
  //     ]

  //     const { getAllByTestId } = render(
  //       <InvoiceInfinityList
  //         testingHandlers={{
  //           testLoading: jest.fn(),
  //           testEmpty: jest.fn(),
  //           reset: jest.fn(),
  //         }}
  //         refetch={mockRefetch}
  //         isRefetching={false}
  //         invoices={mockInvoices}
  //         hasNextPage={false}
  //         isLoading={false}
  //         fetchNextPage={mockFetchNextPage}
  //         onPressHidedOptions={mockOnPressHidedOptions}
  //       />,
  //     )

  //     const invoiceItems = getAllByTestId('InvoiceListItem')
  //     expect(invoiceItems.length).toBe(2)
  //   })
})
