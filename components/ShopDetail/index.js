import { Spinner } from "native-base";
import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View, Image } from "react-native";
import { baseURL } from "../stores/instance";
import shopStore from "../stores/shopStore";
// import styles from "../../styles"
import ProductList from "../ProductList";

const ShopDetail = () => {
  if (shopStore.isLoading) return <Spinner />;
  const shop = shopStore.shops[0];
  return (
    <View>
      <Text>{shop.name}</Text>
      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
      <ProductList products={shop.products} />
    </View>
  );
};

export default observer(ShopDetail);

const styles = StyleSheet.create({});
