import {useEffect, useState} from 'react'
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import TopNav from './components/TopNav';
import Positive from './components/Positive';
import Negative from './components/Negative';

function App() {
  return (
    <BrowserRouter>
    <TopNav /> 
    <Switch>
      <Route exact path="/">
        <Positive />
      </Route>
      <Route path="/negative">
        <Negative />
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
