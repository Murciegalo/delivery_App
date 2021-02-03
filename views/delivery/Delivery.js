import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState,useEffect} from 'react'
import { View, TextInput, Text } from 'react-native';
import styles from './style';
import MenuRestr_Area from '../../components/menuRestr_Area/MenuRestr_Area';
import config from '../../config/config.json'

const Delivery = ({navigation}) => {
  let address = config.origin
  const [code, setCode] = useState(null)
  const [user, setUser] = useState(null)
  const [product, setProduct] = useState(null)
  const [res, setRes] = useState(null)

  useEffect(() => { getUser(), [] })
  useEffect(() => { randomTrack(), []})

  //Random Track Code
  const randomTrack = async () => {
    let result = ''
    let length = 20
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = length; i > 0; i--){
      result += chars[Math.floor(Math.random() * 62)]
    }
    setCode(result)
  }

  // Logged In user ID
  const getUser = async () => {
    let res = await AsyncStorage.getItem('@user')
    let json = JSON.parse(res)
    setUser(json.id)
  }

  return (
    <View>
      <MenuRestr_Area navigation={navigation} name={'Delivery'}/>
      <View style={styles.input}>
        <Text>
          {address}
          {user}
          {product}
          {code}
        </Text>
        <TextInput 
          placeholder='Product name'
          onChangeText={ text => setProduct(text)}
        />
      </View>
    </View>
  )
}


export default Delivery;