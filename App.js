// expo-cli init app-name
// yarn add native-base axios mobx mobx-react
// expo install react-native-svg react-native-safe-area-context

// yarn add @react-navigation/native @react-navigation/stack
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// yarn add @react-navigation/stack

import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./components/Navigation";

// i didn't need to specify index.js because it will automatically look for index.js in that folder.

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

//NativeBase Provider this stays on the whole code, any code that is native base will work
// any code that is nativebase and nothing inside wont work

// NavigationContainer needs to cover the whole app in order to access react-navigation services
