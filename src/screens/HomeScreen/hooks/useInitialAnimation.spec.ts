import { renderHook } from '@testing-library/react-hooks'
import { useInitialAnimation } from './useInitialAnimation'

jest.mock('react-native-reanimated', () => ({
  useSharedValue: jest.fn(() => ({
    value: 0,
  })),
  useAnimatedStyle: jest.fn((fn) => fn),
  withTiming: jest.fn(),
  runOnJS: jest.fn(),
  interpolateColor: jest.fn(),
}))

jest.useFakeTimers()

describe('useInitialAnimation', () => {
  it('should start animation after 1 second', () => {
    const { result } = renderHook(() => useInitialAnimation())

    expect(result.current.animationFinished).toBe(false)

    jest.advanceTimersByTime(1000)

    expect(result.current.animationFinished).toBe(false)
  })
})
