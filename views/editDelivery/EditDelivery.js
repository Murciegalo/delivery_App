import React from 'react'
import { View, Text } from 'react-native';
import MenuRestr_Area from '../../components/menuRestr_Area/MenuRestr_Area';

const EditDelivery = ({navigation}) => {
  return (
    <MenuRestr_Area navigation={navigation} name={'Check Deliveries'}/>
  )
}

export default EditDelivery;