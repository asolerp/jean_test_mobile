import { Alert } from 'react-native'

export const alertDeleteInvoice = (onConfirm: () => void) => {
  Alert.alert(
    'Delete invoice',
    'Are you sure you want to delete this invoice?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        style: 'destructive',
        text: 'Delete',
        onPress: onConfirm,
      },
    ],
    { cancelable: true },
  )
}
