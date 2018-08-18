import React from "react";
import {
  BrowserRouter,
  MemoryRouter,
  HashRouter,
  StaticRouter,
  Link,
  Route
} from "react-router-dom";

import "./App.css";

const LinksRoute = () => (
  <div>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
    <Route exact path={"/"} render={() => <h1>Home</h1>} />
    <Route path={"/about"} render={() => <h1>About</h1>} />
  </div>
);

const forceRefresh = () => {
  console.log(new Date());
  return false;
};

const BrowserRouterApp = () => (
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinksRoute />
  </BrowserRouter>
);

const HashRouterApp = () => (
  <HashRouter hashType={"hashbang"}>
    <LinksRoute />
  </HashRouter>
);

const MemoryRouterApp = () => (
  <MemoryRouter initialEntries={['/', '/about']} initialIndex={0}>
    <LinksRoute />
  </MemoryRouter>
);

const StaticRouterApp = () => (
  <StaticRouter location={"/about"} context={{}}>
    <LinksRoute />
  </StaticRouter>
);

export default StaticRouterApp;
