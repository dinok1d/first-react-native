import { Button, Spinner } from "native-base";
import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View, Image } from "react-native";
import { baseURL } from "../stores/instance";
import shopStore from "../stores/shopStore";
// import styles from "../../styles"
import ProductList from "../ProductList";

const ShopDetail = ({ navigation, route }) => {
  console.log(route);
  console.log(route.params);
  console.log(route.params.shop);

  if (shopStore.isLoading) return <Spinner />;
  const shop = route.params.shop; // we have to pass the shop in order to use it as a params
  // in this case we passed shop as a prop in shopitem that came from shoplist

  //
  return (
    <View>
      <Text>{shop.name}</Text>
      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
      <ProductList products={shop.products} />
      <Button onPress={() => navigation.navigate("Home")}>Go Home</Button>
    </View>
  );
};
// navigation.navigate("Home")}> will unstack the searches back to Home component
export default observer(ShopDetail);

const styles = StyleSheet.create({});
