import { fetchProducts } from "@/action/product";
import React from "react";
import WrapperProducts from "./WrapperProducts";

export default async function page() {
  const res = await fetchProducts(1, 10);
  return <WrapperProducts products={res.products} />;
}
