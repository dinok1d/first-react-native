import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  //consolelogging createStackNavigator gives us a
  // Navigator
  // Screen
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="ShopList" component={ShopList} />
      <Screen name="ShopDetail" component={ShopDetail} />
    </Navigator>
  );
};
// Screen is a self closing tag
// each screen contains a name="" and component
// the app shows the first page in order, so if home is first it will show home first

export default Navigation;
