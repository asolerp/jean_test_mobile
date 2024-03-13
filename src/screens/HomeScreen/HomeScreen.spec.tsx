import React from 'react'
import { render } from '@testing-library/react-native'

// Mock the hooks and navigation actions used in HomeScreen
jest.mock('./hooks/useInitialAnimation', () => ({
  useInitialAnimation: jest.fn().mockReturnValue({
    animatedLogoStyle: {},
    animatedBackgroundStyle: {},
    animationFinished: true,
  }),
}))

jest.mock('./hooks/useShowHidedOptions', () => ({
  useShowHidedOptions: jest.fn().mockReturnValue({
    showHidedOptions: jest.fn(),
    showOptions: true,
  }),
}))

jest.mock('./hooks/useGetInvoices', () => ({
  useGetInvoices: jest.fn().mockReturnValue({
    data: {
      pages: [
        {
          invoices: [
            { id: '1', title: 'Invoice 1' },
            { id: '2', title: 'Invoice 2' },
          ],
        },
      ],
    },
    reset: jest.fn(),
    refetch: jest.fn(),
    isLoading: false,
    hasNextPage: true,
    isRefetching: false,
    fetchNextPage: jest.fn(),
    toggleEmptyTest: jest.fn(),
    toggleLoadingTest: jest.fn(),
  }),
}))

// Add the import statement at the top of your test file
import { HomeScreen } from './HomeScreen'

describe('HomeScreen Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HomeScreen />)
    expect(getByText('Welcome back!')).toBeTruthy()
  })

  it('renders DevOptions when showOptions is true', () => {
    const { getByTestId } = render(<HomeScreen />)
    const devOptions = getByTestId('DevOptions')

    expect(devOptions).toBeTruthy()
  })
})
