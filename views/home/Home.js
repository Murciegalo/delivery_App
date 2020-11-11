import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Home(props) {
  console.log(props)
  return (
    <View>
      <Text>Homepage</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate('Login')}
      >
        <Text>Test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    margin: 20
  },
});
