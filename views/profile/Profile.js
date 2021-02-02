import React, {useState,useEffect} from 'react'
import {View,TextInput,Text,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuRestr_Area from '../../components/menuRestr_Area/MenuRestr_Area';
import config from '../../config/config.json'

const Profile = ({navigation}) => {
  const [idUser, setIdUser] = useState(null)
  const [oldPass, setOldPass] = useState(null)
  const [newPass, setNewPass] = useState(null)
  const [confirmNewPass, setConfirmNewPass] = useState(null)
  const [msg, setMsg] = useState(null)

  useEffect(() => {
    async function getIdUser(){
      let res = await AsyncStorage.getItem('@user')
      let json = JSON.parse(res)
      setIdUser(json.id);
    }
    getIdUser()
  }, 
  [])

  const onSubmit = async () => {
    let res = await fetch(`${config.urlRoot}auth/verifyPass`, {
      method: 'POST',
      body: JSON.stringify({
        id:idUser,
        oldPass,
        newPass,
        confirmNewPass
      }),
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    let json = await res.json()
    console.log(json);
    // setMsg(json)
  }
  return (
    <View>
      <MenuRestr_Area navigation={navigation} name={'Profile'}/>
      <View>
        <Text>{msg}</Text>
        <TextInput placeholder='Current password' onChangeText={e => setOldPass(e)} />
        <TextInput placeholder='New password' onChangeText={e => setNewPass(e)} />
        <TextInput placeholder='Confirm New password' onChangeText={e => setConfirmNewPass(e)} />
        <TouchableOpacity onPress={() => onSubmit()}>
          <Text>Modify</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default Profile;