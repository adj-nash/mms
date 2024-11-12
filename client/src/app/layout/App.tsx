import { useState, useEffect } from "react";
import { Product } from "../models/product";
import Catalogue from "../../features/catalogue/Catalogue";
import { Container, CssBaseline } from "@mui/material";
import Header from "./Header";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5238/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: "",
        description: "",
        price: 0,
        imageUrl: "",
        category: "",
        stock: 1,
        size: "",
        band: "",
        genre: "",
      },
    ]);
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalogue products={products} addProduct={addProduct} />
      </Container>
    </>
  );
}

export default App;
