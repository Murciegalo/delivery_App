import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home({navigation}) {
  return (
    <View>
      <Text>Homepage</Text>
      <Button 
        title="details" 
        onPress={() => navigation.navigate('Login', {
          id: 'test'
        })} 
      />
    </View>
  )
}
