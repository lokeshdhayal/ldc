import React, { useState, useEffect, Component } from 'react'
import InputHandler from './Input'
class Help extends Component {

    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        fetch("https://arvels.pythonanywhere.com/queries/",{method:"GET"})
        .then(rsp=>rsp.json())
        .then(rsp=>this.setState({data:[...this.state.data,rsp]}))

    }
    renderData = () => {
        var i = this.state.data[0]
        if(i){
            return i.map(data=>{
                return(<div key={data.id} className="w3-card w3-margin w3-padding w3-display-container">
                    <div className="w3-margin w3-padding">
            <h3>{data.name}</h3>
                    </div>
                    <div className="w3-display-hover w3-margin w3-padding">
                        Question:{data.query}
                    </div>
                    
                    <div className="w3-display-hover w3-margin w3-padding">
                        Answer:{data.answer}
                    </div>
                </div>
                )
            })
        }
    }



render(){return (
    <div>
    <div>{this.renderData()}</div>
    <InputHandler />
    </div>
    )}
}


export default Help