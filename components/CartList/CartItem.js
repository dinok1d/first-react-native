import React from "react";
import NumericInput from "react-native-numeric-input";
import { Button, HStack } from "native-base";
import { useState } from "react";

import { Text, Image } from "react-native";

import { baseURL } from "../stores/instance";
import cartStore from "../stores/cartStore";
import ItemDelete from "../icons/ItemDelete";

const CartItem = ({ item }) => {
  console.log(item);
  const [quantity, setQuantity] = useState(item.quantity);
  const handeAdd = (value) => {
    // to add items to cart
    setQuantity(value);
    cartStore.addItemToCart(item.product, value); // value here is to make sure we get the latest value of the item
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
        totalWidth={40}
        totalHeight={40}
        minValue={1}
        maxValue={item.product.quantity}
        type="up-down"
        value={quantity}
        onChange={(value) => handeAdd(value)} // the on change is changing the setQuantity via value
      />
      {/* <Button onPress={handeAdd}>delete</Button> */}
      <ItemDelete productId={item.product._id} />
    </HStack>
  );
};
// HStack is horizontal stack
// Vstack is vertical stack
export default CartItem;
