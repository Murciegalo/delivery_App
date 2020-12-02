import React, {useEffect,useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Delivery from '../delivery/Delivery'
import EditDelivery from '../editDelivery/EditDelivery'
import Profile from '../profile/Profile'



export default function Restr_Area() {
  const [user, setUser] = useState(null)
  const Tab = createMaterialBottomTabNavigator();

  useEffect(() => {
    async function getUser(){
      const logInUser = await AsyncStorage.getItem('@user')
      const json = JSON.parse(logInUser)
      if(json){
        setUser(json)
      }
    }
    getUser()
  }
  , [])
  return <Tab.Navigator
    activeColor="#999"
    inactiveColor="#fff"
    barStyle={{
      backgroundColor: '#993',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333'
    }}
  >
    <Tab.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        tabBarIcon: () => <Icon name="users" size={20} color="#999" />
      }}
    />
    <Tab.Screen 
      name="Deliveries" 
      component={Delivery} 
      options={{
        tabBarIcon: () => <Icon name="archive" size={20} color="#999" />
      }}
    />
    <Tab.Screen 
      name="Changes" 
      component={EditDelivery} 
      options={{
        tabBarIcon: () => <Icon name="edit" size={20} color="#999" />
      }}
    />
</Tab.Navigator>

}
