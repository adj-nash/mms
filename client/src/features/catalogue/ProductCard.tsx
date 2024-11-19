import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card
      component={Link}
      to={`/catalogue/${product.id}`}
      style={{ textDecoration: "none" }}
    >
      <CardMedia
        sx={{ height: 250, backgroundSize: "contain" }}
        image={product.imageUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" color="secondary">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="secondary">
          £{(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description.substring(0, 20) + "..."}
        </Typography>
      </CardContent>
    </Card>
  );
}
