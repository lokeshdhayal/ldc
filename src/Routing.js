import React, { Component } from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Body from './Body'
import { Switch } from 'react-router-dom'
import ButtonColor from './ButtonColor'
import CoFounder from './Styles/CoFounder'
import Query from './Styles/Help'
import Input from './Styles/Input'
import InputHandler from './Styles/Input'

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
                <Route path="/help" component={Query} />
                <Route path="/input" component={InputHandler} />
                <Route path="/theme" render={()=><ButtonColor colorss = {(a)=>this.setState({colors:a})} />} />
                <Route path="/cofounder" component={CoFounder} />
            </div>
            </BrowserRouter>
        )
    }
}

export default Routing