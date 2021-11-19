import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import cartStore from "../stores/cartStore";

const ItemDelete = ({ productId }) => {
  return (
    <Icon name="trash-o" onPress={() => cartStore.removeItem(productId)} />
  ); // this is how we create an Icons
};

export default ItemDelete;
