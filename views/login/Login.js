import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import styles from "./login.styles";

export default function Login() {
  const [display, setDisplay] = useState("none");
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [login, setLogin] = useState(null)

  const onSubmit = async () => {
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
    });
    let resJson = await res.json()
    if(resJson.status === 'failed'){
      setDisplay('flex')
      setTimeout(() => setDisplay('none'), 2000)
    }
    console.log(resJson);
  }

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
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
