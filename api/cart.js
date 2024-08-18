import api from "./axios.config";

class Cart {
  // get from cart
  getCart() {}

  // Add to cart
  addItemToCart(item) {
    /**
     * Body structure
     *
     * userId:5,
     * date:2020-02-03,
     * products:[{productId:5,quantity:1},{productId:1,quantity:5}]
     */
  }

  // Update a cart
  updateCart(item) {
    /**
     * userId:3,
     * date:2019-12-10,
     * products:[{productId:1,quantity:3}]
     */
  }

  // delete from cart
  deleteItem(id) {}
}
