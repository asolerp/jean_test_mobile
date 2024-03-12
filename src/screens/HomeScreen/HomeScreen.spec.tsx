import '@tamagui/polyfill-dev'

import React from 'react'

import { render, waitFor } from '@testing-library/react-native'
import { useInitialAnimation } from './hooks/useInitialAnimation'
import { HomeScreen } from './HomeScreen'

jest.mock('@screens/HomeScreen/hooks/useInitialAnimation', () => ({
  useInitialAnimation: jest.fn(),
}))

describe('<HomeScreen />', () => {
  beforeEach(() => {
    // Mock the return value of useMyCustomHook for all tests
    ;(useInitialAnimation as jest.Mock).mockReturnValue({
      // Mock properties or functions the hook returns
      animatedLogoStyle: {},
      animatedBackgroundStyle: {},
      animationFinished: true,
    })
  })

  it('renders correctly and displays welcome texts after animations', async () => {
    // Render the component
    const { getByText } = render(<HomeScreen />)

    // Verify that the welcome texts are not present initially
    expect(getByText('Welcome back!')).toBeTruthy()
    expect(getByText('Pennylane 👋')).toBeTruthy()

    // Wait for the animations to finish
    await waitFor(() => getByText('Welcome back!'))
    await waitFor(() => getByText('Pennylane 👋'))
  })
})
