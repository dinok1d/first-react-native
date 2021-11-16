import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product._id} />
  ));
  return (
    <View>
      <Text>{productList}</Text>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
