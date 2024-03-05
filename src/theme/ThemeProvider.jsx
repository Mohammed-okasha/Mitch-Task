import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

let theme = createTheme({
  palette: {
    primary: { main: "#163300", dark: "#122900", light: "#185039" },
    secondary: { main: "#EDC843", dark: "#bea036", light: "#f4de8e" },
  },
  typography: {
    htmlFontSize: 11,
    fontFamily: ["Baloo Bhaijaan 2", "Roboto", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "unset",
          borderRadius: 100,
          ":hover": { boxShadow: "unset" },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "unset",
          border: "2px solid #D9D9D9",
          borderRadius: 20,
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#edefeb",
          ":hover": { backgroundColor: "#dedede" },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
