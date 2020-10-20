import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/home/Home";
import Login from "../views/login/Login";
import Tracker from "../views/Tracker";
import Restr_Area from "../views/Restr_Area";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Bem Vindo",
            headerStyle: { backgroundColor: "#f58634" },
            headerTintColor: "#333",
            headerTitleStyle: { fontWeight: "bold", alignSelf: "center" },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Tracker" component={Tracker} />
        <Stack.Screen name="Restr_Area" component={Restr_Area} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
