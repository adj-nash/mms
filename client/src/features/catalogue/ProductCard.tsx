import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card>
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
          {product.price}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description.substring(0, 20) + "..."}
        </Typography>
      </CardContent>
    </Card>
  );
}
