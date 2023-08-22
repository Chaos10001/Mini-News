import React, { useEffect } from "react";
import {
  BrowserRouter as Switch,
  Router,
  Route,
  useHistory,
} from "react-router-dom";
import NavBar from "./components/Navbars/NavBar/NavBar";
import SideContainer from "./components/Navbars/Side-Slider/SideContainer";
import ApexChart from "./components/News-Charts";
import LatestNews from "./components/News/Latest News/LatestNews";
import Home from "./components/Pages/Home/Home";

function App() {
  const history = useHistory();

  return (
    <>
      <Router history={history}>
        <Switch>
        <NavBar />
        <SideContainer />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/latest">
            <LatestNews />
          </Route>
          <Route path="/news-charts">
            <ApexChart/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
