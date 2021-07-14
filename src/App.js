
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Gallery from "./components/Pages/Gallery";
import About from "./components/Pages/About"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/contact"
          render={(props) => <Gallery {...props} />}
        />
        <Route exact path="/about" render={(props) => <About {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
