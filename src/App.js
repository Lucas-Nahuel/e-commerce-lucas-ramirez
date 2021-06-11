import React, { Component, Fragment } from 'react';
import './App.css';
import './bootstrap.min.css';


class App extends Component {
  render(){ 
    return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-light">
        <a href="/App.js" className="navbar-brand">Brand</a>
      <div className="collapse navbar-collapse lista"> 
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link" id="color-nav" href="/App.js">producto1</a></li>
        <li className="nav-item"><a className="nav-link" id="color-nav" href="/App.js">producto2</a></li>
        <li className="nav-item"><a className="nav-link" id="color-nav" href="/App.js">producto3</a></li>
      </ul>
      </div>
      </nav>
      <div className="App">
      <h1>my proyect!</h1>
      </div>
    </Fragment>
  );
}
}

export default App;
