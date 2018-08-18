import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => <h1>Home</h1>;

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Home} />
    </div>
  </Router>
);

export default App;
