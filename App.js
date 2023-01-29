import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import Journal from "./journal";
import Guide from "./guide";

const App = () => {
  let fontsLoaded = useFonts({
    SourceSansPro: require("./assets/SourceSansPro-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Journal"
        options={{
          activeTintColor: "black",
          inactiveTintColor: "gray",
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: "1F1E1F" },
        }}
      >
        <Tab.Screen
          name="Journal"
          component={Journal}
          options={{ tabBarLabel: "Journal" }}
        />
        <Tab.Screen
          name="Guide"
          component={Guide}
          options={{ tabBarLabel: "Guide" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
