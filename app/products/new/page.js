import Layout from "@/components/Layout";
import React from "react";

const NewProduct = () => {
  return (
    <Layout>
      <h1>New Product</h1>
      <label>Description</label>
      <input type="text" placeholder="product name" />
      <textarea placeholder="description"></textarea>
      <label>Price (in INR)</label>
      <input type="text" placeholder="price" />
    </Layout>
  );
};

export default NewProduct;
