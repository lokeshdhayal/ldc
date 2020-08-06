import React, { Component } from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Body from './Body'
import ButtonColor from './ButtonColor'
import CoFounder from './Styles/CoFounder'
import Query from './Styles/Help'
import InputHandler from './Styles/Input'
import Home from './Home'
import Get404 from './Get404'
class Routing extends Component{
    constructor(){
        super()
        this.state = {
            colors:"yellow"
        }
    }
    render(){
        return (
            <BrowserRouter>
            <div>
                <Body  colors = {this.state.colors}/>
                <Switch>
                <Route exact path="/help" component={Query} />
                <Route exact path="/" component={Home} />
                <Route exact path="/input" component={InputHandler} />
                <Route exact path="/theme" render={()=><ButtonColor colorss = {(a)=>this.setState({colors:a})} />} />
                <Route exact path="/cofounder" component={CoFounder} />
                <Route component={Get404} />
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

export default Routing