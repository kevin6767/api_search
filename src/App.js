import React from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Nav from './components/Nav'
import About from "./components/About";
import Selection from "./components/Selection";
import HeroDetail from "./components/HeroDetail";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return(
        <Router>
        <div className="App">
            <Nav />
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/select' exact component={Selection} />
            <Route path='/select/:id' component={HeroDetail} />
            </Switch>
        </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <h1> Home Page</h1>
    </div>
);

export default App;