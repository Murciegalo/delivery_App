import React from 'react'
import { View, Text } from 'react-native'

export default function Login({route}) {
  return (
    <View>
      <Text>Login: {route.params.id}</Text>
    </View>
  )
}
