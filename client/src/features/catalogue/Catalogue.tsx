import agent from "../../app/api/agent";
import Loading from "../../app/layout/Loading";

import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalogue() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.products
      .list()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading message={"Loading products..."} />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
