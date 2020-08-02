import React, { Component } from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Body from './Body'
import { Switch } from 'react-router-dom'
import ButtonColor from './ButtonColor'

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
                <Route path="/theme" render={()=><ButtonColor colorss = {(a)=>this.setState({colors:a})} />} />
            </div>
            </BrowserRouter>
        )
    }
}

export default Routing