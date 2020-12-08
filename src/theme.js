import backgroundImage from "./images/BackgroundImage.jpg";

// Main theme
export default {
  palette: {
    primary: {
      light: "#9b9245",
      main: "#827717",
      dark: "#5b5310",
      contrastText: "#fff",
    },

    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff",
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: "url(" + backgroundImage + ")",
        },
      },
    },
    MuiToolbar: {
      gutters: {
        padding: 17,
        "@media (min-width: 600px)": {
          padding: 17,
        },
      },
      regular: {
        minHeight: 64,
        "@media (min-width: 0px) and (orientation: landscape)": {
          minHeight: 64,
        },
      },
    },
  },

  spreadThis: {
    typography: {
      useNextVariants: true,
    },

    card: {
      position: "relative",
      display: "flex",
      marginBottom: 20,
      marginTop: 20,
      maxWidth: 300,
      minWidth: 150,
      minHeight: 530,
      flexDirection: "column",
      backgroundColor: "rgba(255,255,255, 0.9)",
      "&:hover": {
        backgroundColor: "rgba(255,255,255, 1)",
        boxShadow: "0 0 8px 3px #827717",
      },
    },

    cardContent: {
      padding: 18,
      objectFit: "cover",
      maxWidth: 700,
      flexGrow: 1,
    },

    cardImage: {
      minWidth: 200,
      minHeight: 200,
    },

    fab: {
      margin: 10,
    },

    container: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      margin: "30px auto",
    },

    content: {
      position: "relative",
      marginBottom: 25,
    },

    containerFlexColumn: {
      display: "flex",
      flexDirection: "column",
    },

    containerFlexRow: {
      display: "flex",
      flexDirection: "row",
    },

    title: {
      flexGrow: 1,
    },

    price: {
      margin: "8px 10px 0 0",
    },

    picture: {
      margin: "0 5px 0 5px",
    },

    titlePlaceholder: {
      width: "80%",
      height: 30,
      backgroundColor: "rgba(0,0,0, 0.2)",
      marginBottom: 5,
    },

    fullLine: {
      height: 12,
      width: "90%",
      backgroundColor: "rgba(0,0,0, 0.2)",
      marginBottom: 10,
    },

    halfLine: {
      height: 12,
      width: "50%",
      backgroundColor: "rgba(0,0,0, 0.2)",
      marginBottom: 10,
    },

    pricePlaceholder: {
      width: "40%",
      height: 28,
      backgroundColor: "rgba(0,0,0, 0.2)",
      marginRight: 10,
      marginBottom: 10,
    },

    cardImageSpecification: {
      minWidth: 350,
      minHeight: 250,
      objectFit: "contain",
      margin: "10px 30px 0 0",
    },

    linkTitle: {
      flexGrow: 1,
      color: "unset",
      textDecoration: "none",
    },

    "@media screen and (max-width: 700px)": {
      largeScreenSize: {
        display: "none",
      },
    },

    "@media screen and (min-width: 700px)": {
      smallScreenSize: {
        display: "none",
      },
    },
  },
};
