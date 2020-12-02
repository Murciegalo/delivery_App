import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/home/Home";
import Login from "../views/login/Login";
import Tracker from "../views/tracker/Tracker";
import Restr_Area from "../views/restrArea/Restr_Area";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "Bem Vindo",
          headerStyle: { backgroundColor: "#f58634" },
          headerTintColor: "#333",
          headerTitleStyle: { fontWeight: "bold", alignSelf: "center" },
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="tracker" component={Tracker} />
      <Stack.Screen name="restrict" component={Restr_Area} />
    </Stack.Navigator>
  </NavigationContainer>
}
