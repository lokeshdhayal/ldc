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
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="border w3-padding card w3-padding w3-margin card w3-card" style={{width:500}}>
            <label>Name:</label>
            <input type="text" className="form-control" onChange={this.onClickHandler} />
            <label>Enter you question</label>
            <textarea type="text" className="form-control" onChange={this.onClickHand} />
            <button className="btn  w3-green m-2">Submit</button>
        </div>
        </div>
        <p className="w3-text-red">Note:In mobile click to see question and answer</p>
    <div>{this.renderData()}</div>
    </div>
    )}
}


export default Help