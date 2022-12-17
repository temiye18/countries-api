import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useGlobalTheme } from "./Components/store/Context";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import CountryDetails from "./Components/CountryDetails/CountryDetails";
import useAnimate from "./hooks/useAnimate";
import "./App.css";

function App() {
  useAnimate();
  const { theme } = useGlobalTheme();
  return (
    <div className={`${theme}`}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/details/:name" children={<CountryDetails />}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
