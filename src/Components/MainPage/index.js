import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HomePage from "../HomePage/HomePage";
import CountryDetails from "../CountryDetails/CountryDetails";

const MainPage = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/details/:name" children={<CountryDetails />}></Route>
      </Switch>
    </Router>
  );
};

export default MainPage;
