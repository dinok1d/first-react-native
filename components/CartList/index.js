import React from "react";
import { View } from "react-native";
import cartStore from "../stores/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";

const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  return <View>{cartList}</View>;
};

export default observer(CartList);
