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
import * as LocalAuthentication from 'expo-local-authentication'

import styles from "./login.styles";

export default function Login({navigation}) {
  const [display, setDisplay] = useState("none");
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [login, setLogin] = useState(false)
  
  const onSubmit = () => {
    console.log('pressed');
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
        <Pressable style={styles.btn} onPress={onSubmit}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
