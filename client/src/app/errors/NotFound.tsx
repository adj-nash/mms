import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container component={Paper}>
      <Typography variant="h3">
        Oops...we can't seem to find what you're looking for!
      </Typography>
      <Divider />
      <Button component={Link} to="/catalogue">
        Back to products.
      </Button>
    </Container>
  );
}
