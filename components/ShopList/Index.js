import React from "react";
import { StyleSheet, View } from "react-native";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";
import shopStore from "../stores/shopStore";
import { Text } from "react-native-svg";
import { Spinner } from "native-base";

const ShopList = ({ navigation }) => {
  if (shopStore.isLoading) return <Spinner />;
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} navigation={navigation} />
  ));
  return (
    <View>
      <Text>{shopList}</Text>
    </View>
  );
};

export default observer(ShopList);

const styles = StyleSheet.create({});
