import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  mode: boolean;
  toggleMode: () => void;
}

export default function Header({ mode, toggleMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">Metal Merch Store</Typography>
        <Switch checked={mode} onChange={toggleMode} />
      </Toolbar>
    </AppBar>
  );
}
