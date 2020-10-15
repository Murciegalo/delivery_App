import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Home({navigation}) {
  return (
    <View>
      <Text>Homepage</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Login", { id: "test" })
        }
      ><Text>Test</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn:{
    flex:1
  }
})