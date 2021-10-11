import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from "./Chat.js";

function App() {
  return (
    <div className="App">
      <Router>
        {/*Header*/}
        <Header />

        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>welcome</h1>
            </Route>
          </Switch>
          {/*SideBar*/}
          {/*React router -> Chat Screen*/}
        </div>
      </Router>
    </div>
  );
}

export default App;
