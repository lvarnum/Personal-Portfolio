import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home, Portfolio, Contact } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path={"/portfolio"}>
              <Portfolio />
            </Route>
            <Route exact path={"/contact"}>
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
