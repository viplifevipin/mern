import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import TodoList from "./components/list"
import EditTodo from "./components/edit"
import CreateTodo from "./components/create"
class App extends Component {
  render() {
    return (
  
          <div>
                  <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{marginTop: 10}}>
  <a className="navbar-brand " href="/"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ">
    <li className="nav-item active ">
        <a className="nav-link text-light" style={{fontFamily:"sans-serif"}} href="/">Todos<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link text-light" href="/create"> create Todo<span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
        <Route path="/" exact component={TodoList}/>
        <Route path="/edit/:id" exact component={EditTodo}/>
        <Route path="/create" exact component={CreateTodo}/>
        </Router>
        </div>
    );
  }
}

export default App;
