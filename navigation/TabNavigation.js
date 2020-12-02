import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Delivery from '../views/delivery/Delivery'
import EditDelivery from '../views/editDelivery/EditDelivery'
import Profile from '../views/profile/Profile'

const Tab = createMaterialBottomTabNavigator();

const MyRestrictedTabs = () => <Tab.Navigator>
  <Tab.Screen name="Profile" component={Profile} />
  <Tab.Screen name="Deliveries" component={Delivery} />
  <Tab.Screen name="Changes" component={EditDelivery} />
</Tab.Navigator>
  

export default MyRestrictedTabs;