import Header from "./components/Header/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Gallery from "./components/Pages/Gallery";
import Contact from "./components/Pages/Contact";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Paintings from "./components/Pages/Paintings";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const theme = createTheme({
  palette: {
    primary: {
      contrastText: "#fff",
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["Kaisei HarunoUmi"],
  },
});

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("hr");
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact from="/">
            <Redirect to="/home" />
          </Route>
          <Route
            exact
            path="/home"
            render={(props) => <Home {...props} />}
          ></Route>
          <Route
            exact
            path="/gallery"
            render={(props) => <Gallery {...props} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
          <Route
            exact
            path="/paintings/:index"
            render={(props) => <Paintings {...props} />}
          />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
