import React from "react";
import { Text, View } from "react-native";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import cartStore from "../stores/cartStore";
import { HStack } from "native-base";

// product.quantity: the amount of product in the store/inventory
// item.quantity: the amount of the user wants to buy

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handeAdd = (value) => {
    cartStore.addItemToCart(product, value);
    setQuantity(value);
  };
  return (
    <View>
      <HStack>
        <Text>{product.name}</Text>
        <NumericInput
          totalWidth={40}
          totalHeight={40}
          minValue={1}
          maxValue={product.quantity}
          type="up-down"
          value={quantity}
          onChange={(value) => handeAdd(value)} // the on change is changing the setQuantity via value
        />
      </HStack>
    </View>
  );
};

export default ProductItem;
