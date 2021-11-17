import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import { StyleSheet } from "react-native";

import Title from "../icons/Title";
import CartList from "../CartList";
import Cart from "../icons/Cart";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  //console logging createStackNavigator gives us a
  // Navigator
  // Screen -------- Screen gives every component a props called navigation
  return (
    <Navigator
      initialRouteName="CartList"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "red",
        },
        headerTitleStyle: {
          fontStyle: "italic",
          fontWeight: "bold",
        },
      }}
      options={{ headerShown: false }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{ title: "Welcome to our app", headerTitle: () => <Title /> }}
      />
      <Screen
        name="ShopList"
        component={ShopList}
        options={({ navigation }) => ({
          title: "Shops",
          headerRight: () => <Cart navigation={navigation} />,
        })}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ navigation, route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerRight: () => <Cart navigation={navigation} />,
          };
        }} // this line of code has made the title = shop.name which comes to us from params
      />
      <Screen name="CartList" component={CartList} />
    </Navigator>
  );
};
// Screen is a self closing tag
// each screen contains a name="" and component
// the app shows the first page in order, so if home is first it will show home first
// initialRouteName="Home" makes us decide what we want as a first screen

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// reactnavigation.org/docs/bottom-tab-navigator
