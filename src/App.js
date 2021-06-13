import React from 'react'
import './App.css' 
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './component/Home'
import AddTrips from './component/AddTrips'
import ShowTrips from './component/ShowTrips'
import Navbar from './component/Navbar'

function App() {
    return (
        <div className='app'>
            <Router>
            <Navbar />
            <Route exact={true} path='/'>
                <Home />
            </Route>
            <Route exact={true} path='/AddTrips'>
              <AddTrips />
            </Route>
            <Route exact={true} path='/ShowTrips'>
              <ShowTrips />
            </Route>
        </Router>
        </div>
    )
}

export default App
