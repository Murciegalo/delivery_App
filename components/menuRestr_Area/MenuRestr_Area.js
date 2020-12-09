import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'
import {styles} from './menu.styles.js'

const MenuRestr_Area = ({navigation, name}) => {
  const logout = async () => {
    await AsyncStorage.clear()
    navigation.navigate('login')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.btnHome}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="home" size={20} color="#991" />
      </TouchableOpacity>
      <Text style={styles.title}>
        {name}
      </Text>
      <TouchableOpacity 
        style={styles.btnLogout}
        onPress={() => logout()}
      >
        <Icon name="sign-out" size={20} color="#991" />
      </TouchableOpacity>
    </View>
  )
}
export default MenuRestr_Area