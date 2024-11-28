import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ServerError() {
  const { state } = useLocation();

  return (
    <Container>
      {state?.error ? (
        <>
          <Typography>{state.error.title}</Typography>
          <Typography>
            {state.error.detail || "Internal server error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h5">Server Error</Typography>
      )}
    </Container>
  );
}
