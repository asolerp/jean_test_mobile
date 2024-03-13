import { CustomText } from '@src/components/common/CustomText'
import { Spacer } from '@src/components/common/Spacer'
import { View } from 'react-native'
import { formatCurrency } from 'react-native-format-currency'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

type TopSectionProps = {
  isLoading: boolean
  total: string | null | undefined
  finalized: boolean | null | undefined
}

export const TopSection: React.FC<TopSectionProps> = ({
  isLoading,
  total,
  finalized,
}) => {
  const [, totalWithoutSymbol, symbol] = formatCurrency({
    amount: Number(total),
    code: 'EUR',
  })

  if (isLoading) {
    return (
      <View className="items-center">
        <View className={` w-28 rounded-xl p-2 justify-center items-center`}>
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              width={100}
              height={20}
              borderRadius={4}
            />
          </SkeletonPlaceholder>
        </View>
        <Spacer size={1} />
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item width={140} height={40} borderRadius={4} />
        </SkeletonPlaceholder>
      </View>
    )
  }

  return (
    <View className="items-center">
      <View
        className={`${finalized ? 'bg-pennylanePrimary' : 'bg-red-600'}  w-28 rounded-xl p-2 justify-center items-center`}
      >
        <CustomText
          size="small"
          className={`${finalized ? 'text-pennylaneSecondary' : 'text-red-100'}`}
        >
          {finalized ? 'Finalized' : 'Not finalized'}
        </CustomText>
      </View>
      <Spacer size={2} />
      <CustomText
        size="extraLarge4"
        weight="bold"
        className="text-pennylanePrimary "
      >
        {`${totalWithoutSymbol} ${symbol}`}
      </CustomText>
    </View>
  )
}
