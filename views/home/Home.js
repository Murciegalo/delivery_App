import React from "react";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Pressable
        style={styles.button}
        onPress={() => props.navigation.navigate('login')}
      >
        <Text>Press Here</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button:{
    borderWidth:2,
    borderColor:'#000',
    margin:20
  }
});
