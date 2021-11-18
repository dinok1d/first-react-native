import React from "react";
import { View, Text } from "react-native";
import { VStack, Badge } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import { observer } from "mobx-react";
import cartStore from "../stores/cartStore";
// https://oblador.github.io/react-native-vector-icons/

const Cart = ({ navigation }) => {
  return (
    <View>
      <VStack>
        <Badge // bg="red.400"
          colorScheme="danger"
          rounded="999px"
          mb={-5}
          mr={5}
          zIndex={0}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontSize: 12,
          }}
        >
          {cartStore.totalQuantity}
        </Badge>
        {/* <Text>{cartStore.totalQuantity}</Text> */}
        <Icon
          style={{ color: "white", margin: 5 }}
          size={30}
          name="plus"
          onPress={() => navigation.navigate("CartList")}
        />
      </VStack>
    </View>
  );
};
// we are calling totalQuantity to put a number near the kart
export default observer(Cart);
