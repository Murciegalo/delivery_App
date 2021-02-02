import React, {useState,useEffect} from 'react'
import {View,TextInput,Text,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuRestr_Area from '../../components/menuRestr_Area/MenuRestr_Area';


const Profile = ({navigation}) => {
  const [idUser, setIdUser] = useState(null)
  const [oldPass, setOldPass] = useState(null)
  const [newPass, setNewPass] = useState(null)
  const [confirmNewPass, setConfirmNewPass] = useState(null)
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

  }
  return (
    <View>
      <MenuRestr_Area navigation={navigation} name={'Profile'}/>
      <View>
        <Text>Renew your password</Text>
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