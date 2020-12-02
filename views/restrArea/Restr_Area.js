import React, {useEffect,useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
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
  return <Tab.Navigator>
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Deliveries" component={Delivery} />
    <Tab.Screen name="Changes" component={EditDelivery} />
</Tab.Navigator>

}
