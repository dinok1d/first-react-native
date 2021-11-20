import { Button, Center, HStack, Link } from "native-base";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import authStore from "../stores/authStore";
const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user, navigation); // [passes user to authStore.signin]
    // console.log(user);
  };
  return (
    <Center flex={2} px="30">
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signin</Text>
        <TextInput
          onChangeText={(username) => setUser({ ...user, username })} // onchangeText gives you value directly
          //   onChangeText={(value) => setUser({ ...user, username: value })}
          style={styles.authTextInput}
          placeholder="Username"
        />
        <TextInput
          secureTextEntry // to hide passwords
          onChangeText={(password) => setUser({ ...user, password })}
          //   onChangeText={(value) => setUser({ ...user, password: value })}
          style={styles.authTextInput}
          placeholder="Password"
        />
        {/* <Button onPress={handleSubmit}>Login</Button> */}
        <Button onPress={handleSubmit}>Login</Button>
        <HStack>
          <Text>New to this website? </Text>
          <Link onPress={() => navigation.navigate("Signup")}>Sign up</Link>
        </HStack>
      </View>
    </Center>
  );
};

export default Signin;
// we created a useState for username/password

// we created a handeSubmit for submiting the credentials

// we created a textinput to receive the details

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 60,
    paddingLeft: 60,
  },
  authTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    borderBottomWidth: 1,
  },
  AuthOther: {
    marginTop: 15,
  },
  // for different styling method use the following link
  // docs.nativebase.io/login-signup-forms
});
