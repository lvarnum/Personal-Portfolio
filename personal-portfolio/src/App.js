import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home, Portfolio } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={"/portfolio"}>
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
