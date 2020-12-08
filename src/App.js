import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import themeObject from "./theme";

// Pages
import Navbar from "./components/Navbar/Navbar";
import ProductSpecification from "./components/Product/ProductSpecification";
import Chat from "./components/Chat";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import ErrorPage from "./pages/ErrorPage";
import Comparison from "./pages/Comparison";

// MUI Stuff
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

const theme = createMuiTheme(themeObject);

function App() {
  // expose store during tests
  if (window.Cypress) {
    window.store = store;
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Chat />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/comparison" component={Comparison} />
              <Route
                exact
                path="/product/:id"
                component={ProductSpecification}
              />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
