import Animated from 'react-native-reanimated'
import { useInitialAnimation } from './hooks/useInitialAnimation'
import { View } from 'react-native'
import { AddButton } from '@src/components/common/AddButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { openScreen } from '@src/navigation/utils/actions'
import { NEW_INVOICE_SCREEN_KEY } from '../utils/keys'
import { WelcomeMessage } from '@src/components/features/HomeScreen/WelcomeMessage'
import { useGetInvoices } from './hooks/useGetInvoices'
import { Spacer } from '@src/components/common/Spacer'
import { InvoiceInfinityList } from '@src/components/features/HomeScreen/InvoiceInfinityList'

export const HomeScreen = () => {
  const [containerWidth, setContainerWidth] = useState(0)
  const { animatedLogoStyle, animatedBackgroundStyle, animationFinished } =
    useInitialAnimation()
  const {
    data,
    reset,
    refetch,
    isLoading,
    hasNextPage,
    isRefetching,
    fetchNextPage,
    toggleEmptyTest,
    toggleLoadingTest,
  } = useGetInvoices()

  return (
    <Animated.View className="flex-1 p-6" style={[animatedBackgroundStyle]}>
      <SafeAreaView
        edges={['top']}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
        }}
      >
        <View className="absolute flex-1 top-0 bottom-0 left-0 right-0 justify-center items-center">
          <Animated.Image
            className="w-36 h-36"
            style={[animatedLogoStyle]}
            source={require('../../assets/penny_logo.png')}
          />
        </View>
        {animationFinished && (
          <View
            className="flex-1"
            onLayout={(event) => {
              const { width } = event.nativeEvent.layout
              setContainerWidth(width)
            }}
          >
            <WelcomeMessage />
            <Spacer size={4} />
            <InvoiceInfinityList
              testingHandlers={{
                testEmpty: toggleEmptyTest,
                testLoading: toggleLoadingTest,
                reset,
              }}
              isLoading={isLoading}
              refetch={refetch}
              isRefetching={isRefetching}
              invoices={data?.pages.flatMap((page) => page.invoices)}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
            {containerWidth > 0 && (
              <AddButton
                onPress={() => openScreen(NEW_INVOICE_SCREEN_KEY)}
                containerWidth={containerWidth}
              />
            )}
          </View>
        )}
      </SafeAreaView>
    </Animated.View>
  )
}
