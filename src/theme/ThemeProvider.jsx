import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

let theme = createTheme({
  palette: {
    primary: { main: "#15234a", dark: "#111c3b", light: "#444f6e" },
    secondary: { main: "#c5a45f", dark: "#9e834c", light: "#d1b67f" },
  },
  typography: {
    htmlFontSize: 11,
    fontFamily: ["Cairo, Roboto"].join(","),
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
