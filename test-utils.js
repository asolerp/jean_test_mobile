// test-utils.js
import { tamaguiConfig } from '@src/App'
import { render } from '@testing-library/react-native'
import { TamaguiProvider } from 'tamagui'

const AllTheProviders = ({ children }) => {
  return <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
