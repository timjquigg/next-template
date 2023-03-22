import { ThemeProvider } from "@mui/material";
import { PaletteMode } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import {
  createTheme,
  PaletteOptions,
  responsiveFontSizes,
  SimplePaletteColorOptions,
} from "@mui/material/styles";
import { createContext, useState, useMemo, useEffect } from "react";

type Props = {
  children?: React.ReactNode;
};

interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
}

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
    const lightPalette = {
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

    const darkPalette = {
      primary: {
        main: "#0a9396",
        light: "#94d2bd",
        dark: "#005f73",
        // contrastText: "#FFF",
      },

      secondary: {
        main: "#ee9b00",
        light: "#e9d8a6",
        dark: "#ca6702",
        // contrastText: "#FFF",
      },

      info: {
        main: "#ae2012",
        light: "#bb3e03",
        dark: "#9b2226",
        // contrastText: "#FFF",
      },

      background: {
        default: "#001219",
        paper: "#005f73",
      },

      text: {
        primary: "#FFF",
        secondary: "rgba(255, 255, 255, 0.7)",
        // disabled: "#000",
      },
    };
    // const darkPalette = (): PaletteOptions  => {
    //   const primary: PaletteColor = {
    //     main: "#0a9396",
    //     light: "#94d2bd",
    //     dark: "#005f73",
    //     contrastText: "#FFF",
    //   };

    //   const secondary: PaletteColor = {
    //     main: "#ee9b00",
    //     light: "#e9d8a6",
    //     dark: "#ca6702",
    //     contrastText: "#FFF",
    //   };

    //   const info: PaletteColor = {
    //     main: "#ae2012",
    //     light: "#bb3e03",
    //     dark: "#9b2226",
    //     contrastText: "#FFF",
    //   };

    //   const background: TypeBackground = {
    //     default: "#001219",
    //     paper: "#005f73",
    //   };

    //   const text: TypeText = {
    //     primary: "#FFF",
    //     secondary: "rgba(255, 255, 255, 0.7)",
    //     disabled: "#000",
    //   };

    //   return { primary, secondary, info, background, text };
    // };

    return createTheme({
      palette: {
        mode,
        ...(mode === "light" && lightPalette),
        ...(mode === "dark" && darkPalette),
      },
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              color:
                mode === "light"
                  ? lightPalette?.text?.secondary
                  : darkPalette?.text?.secondary,
              margin: "0.5rem",
            },
          },
        },
        MuiMenu: {
          styleOverrides: {
            list: {
              backgroundColor:
                mode === "light"
                  ? lightPalette?.primary?.main
                  : darkPalette?.primary?.main,
            },
          },
        },
      },
      // Uncomment where needed to change fonts:
      // typography: {
      //   allVariants: {
      //     fontFamily: [,].join(","),
      //   },
      //   h1: {
      //     fontFamily: [,].join(","),
      //   },
      //   h2: {
      //     fontFamily: [,].join(","),
      //   },
      //   h3: {
      //     fontFamily: [,].join(","),
      //   },
      //   body1: {
      //     fontFamily: [,].join(","),
      //   },
      //   body2: {
      //     fontFamily: [,].join(","),
      //   },
      // },
    });
  }, [mode]);

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
