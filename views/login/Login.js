import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  Text,
  Platform,
  Pressable,
} from "react-native";
// import * as LocalAuthentication from 'expo-local-authentication'
import styles from "./login.styles";

export default function Login({navigation}) {
  const [display, setDisplay] = useState("none");
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [login, setLogin] = useState(false)
  
  const onSubmit = async () => {
    try {
      if(email && password){
        let res = await fetch('http://192.168.0.20:3000/auth/login' , {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        })
        let json = await res.json()
        if(json === 'error'){
          setDisplay('flex')
          setTimeout(() => setDisplay('none'), 1500);
          await AsyncStorage.clear()
          return 
        }
        await AsyncStorage.setItem('@user', JSON.stringify(json))
        navigation.navigate('restrict')
      }
      else{
        setDisplay('flex')
        setTimeout(() => setDisplay('none'), 1500);
      }  
    } 
    catch (err) {
      console.log(err.message);
    }
  }
  const verifyLogin = async () => {
    let res = await AsyncStorage.getItem('@user')
    let json = await JSON.parse(res)
    if(json !== null){
      setEmail(json.email)
      setPassword(json.password)
      setLogin(true)
    }
    else{
      setLogin(false)
      setEmail(null)
      setPassword(null)
    }
  }
  useEffect(() => {
    verifyLogin()  
  }, 
  [])
  // BIOMETRIC LOGIN IS NOT AVAILABLE ON ALL DEVICES
  // const biometric = async () => {
  //   // available at your phone?
  //   let compatible = await LocalAuthentication.hasHardwareAsync()
  //   if(compatible){
  //     // registered?
  //     let biometricRecords = await LocalAuthentication.isEnrolledAsync()
  //     if(!biometricRecords){
  //       alert(`Biometry don't register`)
  //     }
  //     else{
  //       let result = await LocalAuthentication.authenticateAsync()
  //       if(result.success){
  //         // login
  //         onSubmit()
  //       }
  //       else{
  //         setEmail(null)
  //         setPassword(null)
  //       }
  //     }
  //   }
  // }
  // useEffect(() => {
  //   if(login){
  //     // biometric()
  //   }
  // }, 
  // [login])
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <Image source={require('../../assets/header.png')} />
      </View>
      <View style={styles.logo}>
        <Image source={require('../../assets/iconB.jpg')} />
      </View>
      <View>
        <Text style={styles.error(display)}>Sorry, Invalid credentials</Text>
      </View>
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          onChangeText={ txt => setEmail(txt) }
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={ pass => setPassword(pass) }
        />
        <Pressable style={styles.btn} onPress={onSubmit}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
