import React from "react"; // i need to import react from react in every component
import { Text, View, Button } from "react-native";
// rnfes to create a component

const Home = () => {
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
          alert.alert("shops");
        }}
      >
        Shop List
      </Button>
    </View>
  );
};

export default Home;
