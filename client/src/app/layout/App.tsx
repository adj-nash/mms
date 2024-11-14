import Catalogue from "../../features/catalogue/Catalogue";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(true);
  const modeType = mode ? "dark" : "light";
  const darkTheme = createTheme({
    palette: {
      mode: modeType,
    },
  });

  function toggleMode() {
    setMode(!mode);
  }

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header mode={mode} toggleMode={toggleMode} />
        <Container>
          <Catalogue />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
