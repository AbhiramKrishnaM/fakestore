import api from "./axios.config";

class Product {
  // get all the products
  getProducts() {
    return api.get("/products");
  }

  // get details of a single product
  getProduct(id) {}
}

export default new Product();
