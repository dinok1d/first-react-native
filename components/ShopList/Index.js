import React from "react";
import { StyleSheet, View } from "react-native";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";
import shopStore from "../stores/shopStore";
import { Text } from "react-native-svg";

const ShopList = () => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} />
  ));
  return (
    <View>
      <Text>{shopList}</Text>
    </View>
  );
};

export default observer(ShopList);

const styles = StyleSheet.create({});
