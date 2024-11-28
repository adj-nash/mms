import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";
import NotFound from "../../app/errors/NotFound";
import Loading from "../../app/layout/Loading";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      agent.products
        .details(parseInt(id))
        .then((response) => setProduct(response))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <Loading message={"Loading item details..."} />;

  if (!product) return <NotFound />;

  return (
    <>
      <Grid container spacing={6}>
        <Grid size={6}>
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid size={6}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            {product.name}
          </Typography>

          <Typography variant="h4" sx={{ mb: 1 }}>
            £{(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="subtitle1">Inc. VAT, plus shipping</Typography>
          <br />
          <Typography variant="subtitle1">Size {product.size}</Typography>
          <br />
          <Typography variant="subtitle1">Quantity In Stock - 100</Typography>
          <br />
          <Typography variant="subtitle1">{product.description}</Typography>
          <br />
          <Typography variant="subtitle1">Band - {product.band}</Typography>
          <Typography variant="subtitle1">Genre - {product.genre}</Typography>
          <br />
          <Grid />
        </Grid>
      </Grid>
    </>
  );
}
