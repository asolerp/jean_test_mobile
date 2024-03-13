import { useState } from 'react'

export const useShowHidedOptions = () => {
  const [showOptions, setShowOptions] = useState(false)
  const [_, setPressCount] = useState(0)

  const showHidedOptions = () => {
    setPressCount((currentPressCount) => {
      const nextPressCount = currentPressCount + 1
      if (nextPressCount === 5) {
        setShowOptions(true)
      }
      if (nextPressCount === 6) {
        setShowOptions(false)
        return 0
      }
      return nextPressCount
    })
  }

  return { showOptions, showHidedOptions }
}
