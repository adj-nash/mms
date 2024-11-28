import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer position="bottom-right" />
        <CssBaseline />
        <Header mode={mode} toggleMode={toggleMode} />
        <Container>
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
