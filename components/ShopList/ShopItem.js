import { HStack } from "native-base";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { baseURL } from "../stores/instance";

const ShopItem = ({ shop, navigation }) => {
  console.log(baseURL + shop.image); // just to make sure my image string is correct
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ShopDetail", { shop: shop });
        console.log("click");
      }} // we are giing shopDetail the shop
    >
      <HStack w="100%" alignItems="center" space="3">
        <Image
          source={{ uri: baseURL + shop.image }}
          style={{ width: 100, height: 100 }}
          alt="image"
        />

        <Text>{shop.name}</Text>
      </HStack>
    </Pressable>
  );
};

export default ShopItem;

const styles = StyleSheet.create({});
