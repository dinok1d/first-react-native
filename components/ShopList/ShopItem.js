import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { baseURL } from "../stores/instance";

const ShopItem = ({ shop }) => {
  console.log(baseURL + shop.image); // having problems recieving an image from BE
  return (
    <View>
      <Text>{shop.name}</Text>
      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

export default ShopItem;

const styles = StyleSheet.create({});
