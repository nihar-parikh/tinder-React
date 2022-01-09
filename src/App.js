import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* We want header in all pages so keep outside the router  */}
      {/* Header */}
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>i am a chat page</h1>
          </Route>
          {/* Home Route should be at the last */}
          <Route path="/">
            {/* Tinder Cards */}
            <TinderCards />
          </Route>
        </Switch>

        {/* Buttons below cards */}
        {/* Chat Screen */}
        {/* Individual Chat Screen */}
      </Router>
    </div>
  );
}

export default App;
