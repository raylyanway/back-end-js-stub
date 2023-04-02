import React, { useEffect, useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { client } from "../api";

import { BasicTable } from "./BasicTable";
import { Drawer } from "./Drawer";

const MyApp = () => {
  const [partsOfSpeech, setPartsOfSpeech] = useState();

  useEffect(() => {
    const fetchPartOfSpeech = async () => {
      try {
        const { data } = await client.get("/part-of-speech");

        setPartsOfSpeech(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPartOfSpeech();
  }, []);

  // return <div>{partsOfSpeech && <BasicTable items={partsOfSpeech} />}</div>;
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // background: "#353540",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Some text
      </Box>
      <Drawer />
    </Box>
  );
};

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export function App() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
