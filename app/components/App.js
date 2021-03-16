import React from 'react'
import Hola from './Hola'
import Login from './Login'
import Signup from './Signup'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import NotFount from "../pages/NotFound";
class App extends React.Component{
    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/Login' component={Login}/>
                    <Route component={NotFount}/>
                </Switch>
            </BrowserRouter>

        )
    }
}

export default App;