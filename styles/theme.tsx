import { ThemeProvider } from "@mui/material";
import { PaletteMode } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import {
  createTheme,
  PaletteOptions,
  responsiveFontSizes,
} from "@mui/material/styles";
import { createContext, useState, useMemo, useEffect } from "react";

type Props = {
  children?: React.ReactNode;
};

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode({ children }: Props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = useMemo(() => {
    const lightPalette: PaletteOptions = {
      primary: {
        main: "#83c5be",
        // light: "",
        // dark: "",
      },
      secondary: {
        main: "#e29578",
        // light: "",
        // dark: "",
      },
      info: {
        main: "#006d77",
      },
      background: {
        default: "#edf6f9",
        paper: "#ffddd2",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
      },
    };

    const darkPalette: PaletteOptions = {
      primary: {
        main: "#0a9396",
        light: "#94d2bd",
        dark: "#005f73",
      },
      secondary: {
        main: "#ee9b00",
        light: "#e9d8a6",
        dark: "#ca6702",
      },
      info: {
        main: "#ae2012",
        light: "#bb3e03",
        dark: "#9b2226",
      },
      background: {
        default: "#001219",
        paper: "#005f73",
      },
      text: {
        primary: "#FFF",
        secondary: "rgba(255, 255, 255, 0.7)",
      },
    };

    return createTheme({
      palette: {
        mode,
        ...(mode === "light" && lightPalette),
        ...(mode === "dark" && darkPalette),
      },
      components: {
        MuiTypography: {
          defaultProps: {
            sx: {
              color:
                mode === "light"
                  ? lightPalette?.text?.secondary
                  : darkPalette?.text?.secondary,
              m: "0.5rem",
            },
          },
        },
      },
    });
  }, [mode]);

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
