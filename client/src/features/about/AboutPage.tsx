import {
  Alert,
  AlertTitle,
  Button,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  function getValidationErrors() {
    agent.errors
      .getValidationError()
      .catch((error) => setValidationErrors(error));
  }

  return (
    <>
      <Typography variant="h2">Errors for testing purposes</Typography>
      <Button
        onClick={() =>
          agent.errors.get400Error().catch((error) => console.log(error))
        }
      >
        Test 400 error
      </Button>
      <Button
        onClick={() =>
          agent.errors.get401Error().catch((error) => console.log(error))
        }
      >
        Test 401 error
      </Button>
      <Button
        component={Link}
        to="/not-found"
        onClick={() => {
          agent.errors.get404Error().catch((error) => console.log(error));
        }}
      >
        Test 404 error
      </Button>
      <Button
        onClick={() =>
          agent.errors.get500Error().catch((error) => console.log(error))
        }
      >
        Test 500 error
      </Button>
      <Button onClick={getValidationErrors}>Test validation error</Button>
      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Error!</AlertTitle>
          <List>
            {validationErrors.map((error) => (
              <ListItemText key={error}>{error}</ListItemText>
            ))}
          </List>
        </Alert>
      )}
    </>
  );
}
