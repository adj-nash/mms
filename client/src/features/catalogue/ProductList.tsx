import Grid from "@mui/material/Grid2";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <Grid container spacing={4}>
      {products
        ? products.map((product) => (
            <Grid size={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        : "An error occurred while fetching the products."}
    </Grid>
  );
}
