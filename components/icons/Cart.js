import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
// https://oblador.github.io/react-native-vector-icons/

const Cart = ({ navigation }) => {
  return (
    <View>
      {/* <Text onPress={() => navigation.navigate("CartList")}>Cart</Text> */}
      <Icon
        style={{ color: "white", margin: 5 }}
        size={30}
        name="plus"
        onPress={() => navigation.navigate("CartList")}
      />
    </View>
  );
};

export default Cart;
