import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { instance } from "./instance";
import decode from "jwt-decode";
// yarn add jwt-decode

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      // localStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`; // takes the token and saves it in the headers of the isntance/ so any request from BE will put the token in the header
      this.user = decode(token); // setUser took the token and decoded it then
    } catch (error) {
      console.log(error);
    }
  };

  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/signup", userData);
      navigation.navigate("CartList");
      await AsyncStorage.setItem("myToken", res.data.token);
      this.setUser(res.data.token);
    } catch (error) {
      alert(error);
    }
  };

  signin = async (userData, navigation) => {
    // we passed navigation as a param in sign in
    // the user sent a req to BE
    try {
      const res = await instance.post("/signin", userData);
      navigation.goBack("CartList"); // so we can replace the first page after logging in and we can't go back to logging in
      await AsyncStorage.setItem("myToken", res.data.token);
      this.setUser(res.data.token); // We sent the res-token from logging in to setUser
    } catch (error) {
      alert(error);
    }
  };

  logout = async () => {
    try {
      delete instance.defaults.headers.Authorization;
      await AsyncStorage.removeItem("myToken");
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };

  checkForToken = async () => {
    try {
      this.user = null;
      const token = await AsyncStorage.getItem("myToken");
      if (token) {
        const currentTime = Date.now();
        let tempUser = decode(token);
        if (tempUser.exp * 1000 >= currentTime) {
          this.setUser(token);
        } else {
          this.logout();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
