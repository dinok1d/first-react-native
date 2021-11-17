import React from "react"; // i need to import react from react in every component
import { Text, View, Button } from "react-native";
// rnfes to create a component

const Home = ({ navigation }) => {
  // if we console log props, we will get a list of navigations given to us from Screen
  // which have navigate  /// route,key,name,params

  return (
    <View
      style={{
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#000", fontSize: "38px", textAlign: "center" }}>
        Home Page
      </Text>
      <Button
        onPress={() => {
          navigation.navigate("ShopList"); // ShopList has to be a string and exactly spelt like the title of the previous name
        }}
      >
        Shop List
      </Button>
    </View>
  );
};

export default Home;
