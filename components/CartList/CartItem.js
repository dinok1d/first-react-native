import React from "react";
import NumericInput from "react-native-numeric-input";
import { Button, HStack } from "native-base";
import { useState } from "react";

import { Text, Image } from "react-native";

import { baseURL } from "../stores/instance";
import cartStore from "../stores/cartStore";

const CartItem = ({ item }) => {
  console.log(item);
  const [quantity, setQuantity] = useState(item.quantity);
  const handeAdd = () => {
    const newItem = {
      product: item.product,
      quantity: quantity,
    };
    cartStore.addItemToCart(newItem);
  };
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
      <NumericInput
        type="up-down"
        value={quantity.value}
        maxValue={item.quantity}
        onChange={(value) => setQuantity(value)}
        totalWidth={100}
        totalHeight={50}
      />

      <Button onPress={handeAdd}>add Items</Button>
    </HStack>
  );
};
// HStack is horizontal stack
// Vstack is vertical stack
export default CartItem;
