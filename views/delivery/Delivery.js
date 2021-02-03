import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState,useEffect} from 'react'
import { View, TextInput, Text, TouchableOpacity} from 'react-native';
import MenuRestr_Area from '../../components/menuRestr_Area/MenuRestr_Area';
import config from '../../config/config.json'

const Delivery = ({navigation}) => {
  let address = config.origin
  const [code, setCode] = useState(null)
  const [user, setUser] = useState(null)
  const [product, setProduct] = useState(null)
  const [res, setRes] = useState(null)

  useEffect(() => {
    getUser()
  ,[]})
  
  useEffect(() => {
    let code = randomTrack()
    setCode(code)
  ,[]})

  // Logged In user ID
  async function getUser(){
    let res = await AsyncStorage.getItem('@user')
    let json = JSON.parse(res)
    setUser(json.id)
  } 

  //Random Track Code
  async function randomTrack(){
    let result = ''
    let length = 20
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = length; i > 0; i--) result += chars[Math.floor(Math.random() * 61)]
    return result
  } 
  
  const onSubmit = async () => {
    let res = await fetch(`${config.urlRoot}delivery/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user,
        code,
        local: address,
        product
      })
    })
  }
  return (
    <View>
      <MenuRestr_Area navigation={navigation} name={'Delivery'}/>
      <View>
        <TextInput placeholder='Delivery' onChangeText={e => setProduct(e)} />
        <TouchableOpacity onPress={() => onSubmit()}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default Delivery;