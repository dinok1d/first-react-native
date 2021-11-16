import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { baseURL } from "../stores/instance";

const ProductItem = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
      {/* <Image
        source={{ uri: baseURL + product.image }}
        style={{ width: 50, height: 50 }}
      /> */}
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
