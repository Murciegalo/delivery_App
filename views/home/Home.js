import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Home(props) {
  const onPress = () => props.navigation.navigate('login')
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
