import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState,useEffect} from 'react'
import { View, TextInput, Text, TouchableOpacity, Image, Button} from 'react-native';
import MenuRestr_Area from '../../components/menuRestr_Area/MenuRestr_Area';
import config from '../../config/config.json'

const Delivery = ({navigation}) => {
  let result = ''
  let address = config.origin
  const [code, setCode] = useState(null)
  const [user, setUser] = useState(null)
  const [product, setProduct] = useState(null)
  const [res, setRes] = useState(null)

  useEffect(() => {
    getUser()
  },[])
  // avoid duplicates QRCodes
  useEffect(() => {
    randomTrack()
    setProduct(null)
  ,[res]})
  

  // Logged In user ID
  async function getUser(){
    let res = await AsyncStorage.getItem('@user')
    let json = JSON.parse(res)
    setUser(json.id)
  } 

  //Random Track Code
  async function randomTrack(){
    let length = 20
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = length; i > 0; i--) result += chars[Math.floor(Math.random() * 61)]
  } 
  
  const onSubmit = async () => {
    if(result !== null){
      console.log('NOT NULL', result);
      setCode(result)
    }
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
    let json = await res.json()
    setRes(json)
  }

  const qrCode = res && <View>
    <Image source={{uri:res, height:180, width:180}} />
    <Button title='Share'/>
  </View>
      
  return (
    <View>
      <MenuRestr_Area navigation={navigation} name={'Delivery'}/>
      {qrCode}
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