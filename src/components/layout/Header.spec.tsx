import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Header, Mode } from './Header'
import { Text } from 'react-native'

jest.mock('@src/navigation/utils/actions', () => ({
  popScreen: jest.fn(),
}))

describe('Header Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Header />)

    expect(getByText('')).toBeTruthy()
  })

  it('renders correctly with passed props', () => {
    const { getByText } = render(
      <Header title="Test Title" mode={Mode.WHITE} />,
    )

    expect(getByText('Test Title')).toBeTruthy()
  })

  it('calls popScreen function when the Arrow icon is pressed', () => {
    const { popScreen } = require('@src/navigation/utils/actions')
    const { getByTestId } = render(<Header />)
    const arrowIcon = getByTestId('ArrowIcon')

    fireEvent.press(arrowIcon)

    expect(popScreen).toHaveBeenCalled()
  })

  it('renders right component when passed', () => {
    const rightComponent = <Text>Right Component</Text>
    const { getByText } = render(<Header rightComponent={rightComponent} />)

    expect(getByText('Right Component')).toBeTruthy()
  })
})
