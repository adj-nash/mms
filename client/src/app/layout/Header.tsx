import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchAppBar from "../../features/search/SearchBar";

interface Props {
  mode: boolean;
  toggleMode: () => void;
}

const leftLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const rightLinks = [
  { name: "Login ", path: "/login" },
  { name: "Register", path: "/register" },
];

export default function Header({ mode, toggleMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6">Metal Merch Store</Typography>
          <Switch checked={mode} onChange={toggleMode} />
        </Box>

        <Box></Box>
        <List sx={{ display: "flex" }}>
          {leftLinks.map(({ name, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{ color: "white", typography: "h6", ml: -2 }}
            >
              {name}
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="center">
          <SearchAppBar />
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ name, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{
                  color: "white",
                  typography: "h6",
                  mr: -2,
                }}
              >
                {name}
              </ListItem>
            ))}
          </List>
          <IconButton
            aria-label="cart"
            sx={{
              typography: "h6",
            }}
          >
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
