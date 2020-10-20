import React from "react";
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
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, c.darkBg]}
    >
      <View>{/* <Image source={} /> */}</View>

      <View>
        <Text style={styles.error}>Invalid user or password</Text>
      </View>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="User" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
