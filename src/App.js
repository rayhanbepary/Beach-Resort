import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

//pages
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import Error from './Pages/Error';
import SingleRooms from './Pages/SingleRooms';

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms/" component={Rooms}></Route>
        <Route exact path="/rooms/:slug" component={SingleRooms}></Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
