import React, { Component, Fragment } from 'react';
import './App.css';
import './bootstrap.min.css';
import Li from './components/itemlist/itemlist';
import NavBar from './components/navBar/navBar';

class App extends Component {
  render(){ 
    return (
    <Fragment>
      <NavBar/>
      <div className="App">
      <h1>my proyect!</h1>
      </div>
      <ul className="ul-props">
        <Li title={'Marca 1'}/>
        <Li title={'Marca 2'}/>
        <Li title={'Marca 3'}/>
      </ul>
    </Fragment>
  );
}
}

export default App;
