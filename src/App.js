import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,} from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Cards from './components/Cards';
function App() {
  return (
    <>

    <Router>
      <Navbar />
      <Cards />
      <Switch>  
       <Route path="/navbar" exact />
       </Switch>
      </Router>
    </>

  );
}

export default App;
