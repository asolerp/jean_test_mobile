import { CustomButton } from '@src/components/common/CustomButton'
import { Sizes, Variants } from '@src/utils/types'
import Animated, { FadeIn } from 'react-native-reanimated'

type BottomActionsProps = {
  paid: boolean
  isLoading: boolean
  finalized: boolean
  isLoadingUpdate: boolean
  updateInvoice: (body: { finalized?: boolean; paid?: boolean }) => void
}

export const BottomActions: React.FC<BottomActionsProps> = ({
  paid,
  isLoading,
  finalized,
  updateInvoice,
  isLoadingUpdate,
}) => {
  if (isLoading) {
    return null
  }

  if (!finalized) {
    return (
      <Animated.View entering={FadeIn} className="px-6">
        <CustomButton
          loading={isLoadingUpdate}
          onPress={() => updateInvoice({ finalized: true })}
          size={Sizes.LARGE}
        >
          Finalize Invoice
        </CustomButton>
      </Animated.View>
    )
  }

  if (!paid) {
    return (
      <Animated.View entering={FadeIn} className="px-6">
        <CustomButton
          loading={isLoadingUpdate}
          onPress={() => updateInvoice({ paid: true })}
          size={Sizes.LARGE}
        >
          Mark as paid
        </CustomButton>
      </Animated.View>
    )
  }

  if (paid) {
    return (
      <Animated.View entering={FadeIn} className="px-6">
        <CustomButton
          loading={isLoadingUpdate}
          variant={Variants.DANGER}
          onPress={() => updateInvoice({ paid: false })}
          size={Sizes.LARGE}
        >
          Mark as unpaid
        </CustomButton>
      </Animated.View>
    )
  }
}
