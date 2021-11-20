import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

// why do i need to stringfy the array
// because async storage we save strings inside them. if we gave it objects it wont be happy
//
// import { AsyncStorage } from "react-native";

class CartStore {
  // items = [
  //   {
  //     product: {
  //       _id: "6182a8b31bd7fa38942fdf23",
  //       name: "Cookie",
  //       price: 5,
  //       image:
  //         "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
  //     },
  //     quantity: 5,
  //   },
  //   {
  //     product: {
  //       _id: "6182a8b31bd7fa46652fdf88",
  //       name: "Another cookie",
  //       price: 15,
  //       image:
  //         "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
  //     },
  //     quantity: 3,
  //   },
  // ];

  constructor() {
    makeAutoObservable(this);
  }

  addItemToCart = async (product, quantity) => {
    try {
      const foundItem = this.items.find(
        (item) => item.product._id === product._id
      ); // i need to find the item and decide whether to add it or update it
      if (foundItem) {
        // update item quantity
        foundItem.quantity = quantity;
      } else {
        // add product to this.items
        const newItem = {
          product: product,
          quantity: quantity,
        };
        this.items.push(newItem);
      }
      await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
    } catch (error) {
      console.log(error);
    }
  };

  removeItem = async (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  }; // to delete the item based on their ID

  checkout = async () => {
    this.items = [];
    await AsyncStorage.removeItem("myCart");
    alert("Thank you for shopping");
  };

  fetchCart = async () => {
    try {
      const items = await AsyncStorage.getItem("myCart"); // the string needs to be same as the string in line 53
      this.items = items ? JSON.parse(items) : []; // if items exists parse the items, or else give me an empty array
    } catch (error) {
      console.log(error);
    }
  };

  // computing algorithms
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total = total += item.quantity));
    return total;
  }
}

const cartStore = new CartStore(); // 101

cartStore.fetchCart(); //presisistence is Key

export default cartStore;
