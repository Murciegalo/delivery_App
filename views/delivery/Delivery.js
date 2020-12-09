import React from 'react'
import { View, Text } from 'react-native';
import MenuRestr_Area from '../../components/menuRestr_Area/MenuRestr_Area';

const Delivery = ({navigation}) => {
  return (
    <MenuRestr_Area navigation={navigation} name={'Delivery'}/>
  )
}


export default Delivery;