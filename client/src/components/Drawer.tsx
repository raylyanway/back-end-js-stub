import * as React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { default as MuiDrawer } from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";

import { ColorModeContext } from "./App";

export const Drawer = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setMenuOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem key="theme-mode" disablePadding>
          <ListItemButton onClick={colorMode.toggleColorMode}>
            <ListItemIcon>
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </ListItemIcon>
            <ListItemText
              primary={`${
                theme.palette.mode === "dark" ? "light" : "dark"
              } mode`}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  function MyApp() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    );
  }

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <MuiDrawer anchor="bottom" open={menuOpen} onClose={toggleDrawer(false)}>
        {list()}
      </MuiDrawer>
    </div>
  );
};
