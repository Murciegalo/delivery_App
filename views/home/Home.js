import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Home(props) {
  const onPress = () => props.navigation.navigate('login')
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Pressable
        style={styles.button}
        onPress={onPress}
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
});
