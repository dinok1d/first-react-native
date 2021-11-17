import React from "react";

import { Box, HStack } from "native-base";

import { Text, Image } from "react-native";

import { baseURL } from "../stores/instance";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <HStack w="100%" alignItems="center" space="3">
      <Image
        source={{ uri: baseURL + item.product.image }}
        style={{ width: 100, height: 100 }}
        alt="image"
      />

      <Text>{item.product.name}</Text>
      <Text>{item.quantity} left</Text>
      <Text>{item.product.price} KD</Text>
      <Text>{item.quantity * item.product.price} KD</Text>
    </HStack>
  );
};
// HStack is horizontal stack
// Vstack is vertical stack
export default CartItem;
