import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useEffect,useState} from 'react'

import { View, Text } from 'react-native'

export default function Restr_Area() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    async function getUser(){
      const logInUser = await AsyncStorage.getItem('@user')
      JSON.parse(logInUser)
      setUser(logInUser)
    }
    getUser
    return () => {
    }
  }
  , [])
  return (
    <View>
      <Text>Restricted Area</Text>
    </View>
  )
}
