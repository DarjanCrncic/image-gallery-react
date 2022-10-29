import Header from "./components/Header/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Gallery from "./components/Pages/Gallery";
import Contact from "./components/Pages/Contact";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Paintings from "./components/Pages/Paintings";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useContext, useEffect } from "react";
import ImageContext from "./store/image-context";

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

const images = [
  {
    id: 1,
    title: "Tulipani",
    description: "Slika crvenih tulipana koji su zapravo makovi.",
    path_to_file: "images/makovi.jpg",
    painted_at: "2016",
    technique: "akvarel"
  },
  {
    id: 2,
    title: "Drvo u jesen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non d…",
    path_to_file: "images/drvo.jpg",
    painted_at: "2016",
    technique: "akvarel"
  },
  {
    id: 3,
    title: "Sestre",
    description: "Sestre Mateja i Iva.",
    path_to_file: "images/sestre.jpg",
    painted_at: "2017",
    technique: "akvarel"
  },
  {
    id: 4,
    title: "Riba",
    description: "Apstraktna slika ribe.",
    path_to_file: "images/riba.jpg",
    painted_at: "1990",
    technique: "Monotipija"
  },
];

function App() {
  const { i18n } = useTranslation();
  const ctx = useContext(ImageContext);

  useEffect(() => {
    i18n.changeLanguage("hr");

    let source = axios.CancelToken.source();
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get("/images/", {
    //       cancelToken: source.token,
    //     });
    //     ctx.setImages(response.data);
    //   } catch (error) {
    //     if (axios.isCancel(error)) {
    //       console.log(error);
    //     } else {
    //       throw error;
    //     }
    //   }
    // };
    const fetchData = () => {
      ctx.setImages(images);
    }

    fetchData();
    return () => {
      source.cancel();
    };
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
