import React from "react";
import { View } from "react-native";
import cartStore from "../stores/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import { Button } from "native-base";

const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  return (
    <View>
      {cartList}
      <Button onPress={cartStore.checkout}>Checkout</Button>
    </View>
  );
};

export default observer(CartList); // CartList needs to be an observer for delete function to work
