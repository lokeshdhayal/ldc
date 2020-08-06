import React, { Component } from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Body from './Body'
import ButtonColor from './ButtonColor'
import CoFounder from './Styles/CoFounder'
import Query from './Styles/Help'
import InputHandler from './Styles/Input'
import Home from './Home'
import Get404 from './Get404'
import LogIn from './Loggin/LogIn'
import SignIn from './Loggin/SignIn'
import * as firebase from 'firebase'
class Routing extends Component{
    constructor(){
        super()
        this.state = {
            colors:"aqua"
        }
    }
    render(){
        return (
            <div>
                <Body  colors = {this.state.colors}/> 
                <Switch>
                <Route exact path="/help" component={Query} />
                <Route path = "/signin" component={SignIn} />
                <Route path = "/login" component={LogIn} /> 
                <Route exact path="/input" component={InputHandler} />
                <Route exact path="/theme" render={()=><ButtonColor colorss = {(a)=>this.setState({colors:a})} />} />
                <Route exact path="/cofounder" component = {CoFounder} />
                <Route component={Get404} />
                </Switch>
            </div>
        )
    }
}

export default Routing