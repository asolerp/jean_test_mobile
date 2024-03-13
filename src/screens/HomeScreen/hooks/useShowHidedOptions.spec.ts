import { renderHook, act } from '@testing-library/react-hooks'
import { useShowHidedOptions } from './useShowHidedOptions'

describe('useShowHidedOptions', () => {
  it('should show options after 5 presses and hide them after 6', () => {
    const { result } = renderHook(() => useShowHidedOptions())

    // At the beginning, showOptions should be false
    expect(result.current.showOptions).toBe(false)

    // Call showHidedOptions 4 times. showOptions should still be false
    act(() => {
      for (let i = 0; i < 4; i++) {
        result.current.showHidedOptions()
      }
    })
    expect(result.current.showOptions).toBe(false)

    // Call showHidedOptions for the 5th time. showOptions should now be true
    act(() => {
      result.current.showHidedOptions()
    })
    expect(result.current.showOptions).toBe(true)

    // Call showHidedOptions for the 6th time. showOptions should now be false again
    act(() => {
      result.current.showHidedOptions()
    })
    expect(result.current.showOptions).toBe(false)
  })
})
