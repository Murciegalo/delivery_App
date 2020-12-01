import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useEffect,useState} from 'react'

import { View, Text } from 'react-native'

export default function Restr_Area() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    async function getUser(){
      const logInUser = await AsyncStorage.getItem('@user')
      const json = JSON.parse(logInUser)
      setUser(json)
    }
    getUser()
  }
  , [])

  return (
    <View>
      <Text>Restricted Area {user.email}</Text>
    </View>
  )
}
