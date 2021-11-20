import React from "react";
import { View } from "react-native";
import cartStore from "../stores/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import { Button } from "native-base";
import authStore from "../stores/authStore";
import { Alert } from "react-native";

const CartList = ({ navigation }) => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  const handlePress = () => {
    if (authStore.user) {
      // you need to be signed in to checkout (cartstore.checkout())
      cartStore.checkout();
    } else {
      Alert.alert("Sign in", "you need to be signed in to checkout", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "sign in", onPress: () => navigation.navigate("Signin") },
      ]);
    }
  };
  return (
    <View>
      {cartList}
      <Button onPress={handlePress}>Checkout</Button>
    </View>
  );
};

export default observer(CartList); // CartList needs to be an observer for delete function to work
