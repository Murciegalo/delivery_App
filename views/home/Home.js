import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => props.navigation.navigate('login')} title="test"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
