//npm install @react-navigation/drawer

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const Drawer = createDrawerNavigator();

const Lab62 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Screen1">
        <Drawer.Screen name="Screen1" component={Screen1} />
        <Drawer.Screen name="Screen2" component={Screen2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Lab62;