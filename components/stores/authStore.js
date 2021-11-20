import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import decode from "jwt-decode";
// yarn add jwt-decode

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
    // localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`; // takes the token and saves it in the headers of the isntance/ so any request from BE will put the token in the header
    this.user = decode(token); // setUser took the token and decoded it then
  };

  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/signup", userData);
      navigation.navigate("CartList");
      //   localStorage.setItem("myToken", res.data.token);
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
      //   localStorage.setItem("myToken", res.data.token);
      this.setUser(res.data.token); // We sent the res-token from logging in to setUser
    } catch (error) {
      alert(error);
    }
  };

  logout = () => {
    delete instance.defaults.headers.Authorization;
    // localStorage.removeItem("myToken");
    this.user = null;
  };

  //   checkForToken = () => {
  //     this.user = null;
  //     const token = localStorage.getItem("myToken");
  //     if (token) {
  //       const currentTime = Date.now();
  //       let tempUser = decode(token);
  //       if (tempUser.exp * 1000 >= currentTime) {
  //         this.setUser(token);
  //       } else {
  //         this.logout();
  //       }
  //     }
  //   };
}

const authStore = new AuthStore();
// authStore.checkForToken();
export default authStore;
