import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ShopStore {
  shops = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchShops = async () => {
    try {
      const res = await instance.get("/shops");
      this.shops = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
