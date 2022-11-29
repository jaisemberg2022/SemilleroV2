import { Components, createTheme, PaletteOptions, Shadows } from "@mui/material";

export const color = {
  light: {
    text: {
      primary: "rgba(16, 24, 64, 0.87)",
      secondary: "rgba(16, 24, 64, 0.6)",
      disabled: "rgba(16, 24, 64, 0.38)",
    },
    primary: {
      main: "#1E62A1",
      dark: "#003972",
      light: "#5A8FD3",
    },
    secondary: {
      main: "#0CBBE2",
      dark: "#008BB0",
      light: "#67EEFF",
    },
    action: {
      active: "rgba(16, 24, 64, 0.54)",
      hover: "rgba(16, 24, 64, 0.04)",
      selected: "rgba(16, 24, 64, 0.08)",
      disabled: "rgba(16, 24, 64, 0.26)",
      disabledBackground: "rgba(16, 24, 64, 0.12)",
      focus: "rgba(16, 24, 64, 0.12)",
    },
    error: {
      main: "#D14343",
      dark: "#B51E1E",
      light: "#D85F5F",
    },
    warning: {
      main: "#FB8500",
      dark: "#F85500",
      light: "#FC9726",
    },
    info: {
      main: "#2D9FC5",
      dark: "#1172A3",
      light: "#4DADCE",
      contrastText: "#FFF",
    },
    success: {
      main: "#8FC93A",
      dark: "#60A918",
      light: "#A0D158",
      contrastText: "#FFF",
    },
    background: {
      paper: "#FBFBFB",
      default: "#F1F0EE",
    },
    other: {
      divider: "rgba(16, 24, 64, 0.12)",
      outlinedBorder: "rgba(16, 24, 64, 0.23)",
      backdropOverlay: "rgba(16, 24, 64, 0.5)",
      filledInputBackground: "rgba(16, 24, 64, 0.06)",
      standardInputLine: "rgba(16, 24, 64, 0.42)",
      snackbar: "#1B344C",
      ratingActive: "#FFB400",
    },
    contrast: "#FFFFFF",
  },
  dark: {
    text: {
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    primary: {
      main: "#4DADCE",
      dark: "#2D9FC5",
      light: "#C0E2EE",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#BBC2C9",
      dark: "#8D9AA6",
      light: "#E4E7EA",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    action: {
      active: "rgba(255, 255, 255, 0.56)",
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.16)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)",
    },
    error: {
      main: "#D14343",
      dark: "#B51E1E",
      light: "#E57373",
      contrastText: "#FFF",
    },
    warning: {
      main: "#FB8500",
      dark: "#F85500",
      light: "#FC9726",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#4DADCE",
      dark: "#2D9FC5",
      light: "#C0E2EE",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    success: {
      main: "#8FC93A",
      dark: "#60A918",
      light: "#A0D158",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    contrast: "rgba(0, 0, 0, 0.87)",
  },
};
export const grey = {
  50: "#FAFBFF",
  100: "#F4F6FA",
  200: "#EDEFF5",
  300: "#E6E8F0",
  400: "#D8DAE5",
  500: "#C1C4D6",
  600: "#8F95B2",
  700: "#696F8C",
  800: "#474D66",
  900: "#101840",
  A100: "#D8DAE5",
  A200: "#C1C4D6",
  A400: "#696F8C",
  A700: "#101840",
};

export const typography = {
  fontFamily: "'Roboto','sans-serif'",
  h1: {
    fontFamily: "Nunito",
    fontSize: "96px",
    fontWeight: "300",
  },
  h2: {
    fontFamily: "Nunito",
    fontSize: "60px",
    fontWeight: "400",
  },
  h3: {
    fontFamily: "Nunito",
    fontSize: "48px",
    fontWeight: "500",
  },
  h4: {
    fontFamily: "Nunito",
    fontSize: "34px",
    fontWeight: "600",
  },
  h5: {
    fontFamily: "Nunito",
    fontSize: "24px",
    fontWeight: "600",
  },
  h6: {
    fontFamily: "Nunito",
    fontSize: "20px",
    fontWeight: "600",
  },
  subtitle1: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
  },
  subtitle2: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
  },
  body1: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
  },
  body2: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
  },
  button: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
  },
  caption: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
  },
};
export const shadows: Shadows = [
  "none",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
  "0px 2px 1px -1px rgba(16, 24, 64, 0.1),0px 1px 1px 0px rgba(16, 24, 64, .14),0px 1px 3px 0px rgba(16, 24, 64, .12)",
];
const colorLight: PaletteOptions= {
  text: {
    primary: color.light.text.primary,
    secondary: color.light.text.secondary,
    disabled: color.light.text.disabled,
  },
  primary: {
    main: color.light.primary.main,
    dark: color.light.primary.dark,
    light: color.light.primary.light,
    contrastText: color.light.contrast,
  },
  secondary: {
    main: color.light.secondary.main,
    dark: color.light.secondary.dark,
    light: color.light.secondary.light,
    contrastText: color.light.contrast,
  },
  action: {
    active: color.light.action.active,
    hover: color.light.action.hover,
    selected: color.light.action.selected,
    disabled: color.light.action.disabled,
    disabledBackground: color.light.action.disabledBackground,
    focus: color.light.action.disabledBackground,
  },
  error: {
    main: color.light.error.main,
    dark: color.light.error.dark,
    light: color.light.error.light,
    contrastText: color.light.contrast,
  },
  warning: {
    main: color.light.warning.main,
    dark: color.light.warning.dark,
    light: color.light.warning.light,
    contrastText: color.light.contrast,
  },
  info: {
    main: color.light.info.main,
    dark: color.light.info.dark,
    light: color.light.info.light,
    contrastText: color.light.contrast,
  },
  success: {
    main: color.light.success.main,
    dark: color.light.success.dark,
    light: color.light.success.light,
    contrastText: color.light.contrast,
  },
  background: {
    paper: color.light.background.paper,
    default: color.light.background.default,
  },
  grey:grey,
  divider: color.light.other.divider,
};

export const componentes:Components = { 
    MuiButton:{
        styleOverrides:{
            root:{
                textTransform:'lowercase'
            }
           }
    },
   MuiChip:{
    styleOverrides:{
        root:{
            borderRadius:"4px"
        }
    }
   }
           
}


export const tema = createTheme({
    components:componentes,
  palette: colorLight,
  typography: typography,
  shadows: shadows,

});
