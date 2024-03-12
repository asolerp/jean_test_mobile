import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { AddButton } from './AddButton' // ensure the correct path to your AddButton component

describe('AddButton', () => {
  it('renders correctly with given props', () => {
    const onPress = jest.fn()
    const { getByText } = render(
      <AddButton containerWidth={100} onPress={onPress} />,
    )

    // Check if the button is rendered with correct text
    expect(getByText('+')).toBeDefined()
  })

  it('calls onPress when pressed', () => {
    const onPress = jest.fn()
    const { getByText } = render(
      <AddButton containerWidth={100} onPress={onPress} />,
    )

    // Simulate a press on the button
    fireEvent.press(getByText('+'))

    // Check if onPress was called
    expect(onPress).toHaveBeenCalled()
  })
})
