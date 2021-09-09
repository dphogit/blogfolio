import { createTheme } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    common: {
      black: "#011409",
      white: "#F5F5F5",
    },

    primary: {
      main: "#0C205A",
    },

    secondary: {
      main: "#0C7C59",
    },

    success: {
      main: "#0C7C59",
    },

    error: {
      main: "#FF4B3E",
    },

    text: {
      primary: "#011409",
      secondary: "#726E71",
    },

    background: {
      default: "#F5F5F5",
    },
  },

  typography: {
    fontFamily: "Open Sans, Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: "Staatliches, cursive",
      fontSize: "6.625rem",
      lineHeight: "6rem",
    },
    blogHeader: {
      fontFamily: "Raleway, Helvetica, Arial, sans-serif",
    },
  },

  overrides: {
    MuiButton: {
      root: {
        textTransform: "capitalize",
      },
    },
  },
})

export default theme
