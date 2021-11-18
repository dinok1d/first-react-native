import { makeAutoObservable } from "mobx";
import { AsyncStorage } from "react-native";

class CartStore {
  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Cookie",
        price: 5,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Another cookie",
        price: 15,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 3,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addItemToCart = (product, quantity) => {
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
  };

  //  await AsyncStorage.setItem("myCart", JSON.stringify(this.items));

  //  fetchCart = async () => {
  //   const items = await AsyncStorage.getItem('myCart');
  //   this.items = items ? JSON.parse(items) : []; presisistence is Key

  // computing algorithms
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total = total + item.quantity));
    return total;
  }
}

const cartStore = new CartStore(); // 101

// cartStore.fetchCart(); presisistence is Key

export default cartStore;
