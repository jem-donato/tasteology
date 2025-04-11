import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontSize: "30px",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: "#FFFFFF",
          fontSize: "21px",
          lineHeight: 1.6,
        },
        overline: {
          fontSize: "15px",
          color: "#cf1430",
          fontWeight: "bold",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    background: {
      default: "black",
    },
  },
});
