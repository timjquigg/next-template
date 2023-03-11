import { ThemeProvider } from "@emotion/react";
import { PaletteMode } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";

type Props = {
  children?: React.ReactNode;
};

export const colorModeContext = createContext({ toggleColorMode: () => {} });

export default function ColorModeProvider({ children }: Props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = createTheme({
    palette: {
      mode,
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </colorModeContext.Provider>
  );
}
