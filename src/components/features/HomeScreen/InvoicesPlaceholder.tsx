import { View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

export const InvoicesPlaceholder = () => {
  const skeletons = Array.from({ length: 6 }, (_, index) => (
    <SkeletonPlaceholder key={index} borderRadius={3}>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginTop={20}
      >
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width={80} height={10} />
          <SkeletonPlaceholder.Item marginTop={6} width={120} height={20} />
          <SkeletonPlaceholder.Item marginTop={6} width={170} height={10} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item alignItems="flex-end">
          <SkeletonPlaceholder.Item width={50} height={15} />
          <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  ))

  return <View testID="InvoicesPlaceholder">{skeletons}</View>
}
