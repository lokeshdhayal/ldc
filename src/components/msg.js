import React from 'react'
import ReactEmoji from 'react-emoji';


const msg  = (props) => {
    if(props.msg.user !== "me"){
    return (
        <div key = {Math.random()} stlye = {{display:"flex"}}>
            <p className = "w3-padding w3-blue" style = {{borderRadius:30,maxWidth:"70%"}}>{ReactEmoji.emojify(props.msg.text)}<span className = "w3-pink badge w3-right">{props.msg.user}</span></p>
            </div>)
    }
    else{
        return (
            <div key = {Math.random()} className = "text-right" style ={{display:"flex"}}>
                <div style = {{flex:5}}>

                </div>
                <div style = {{flex:5}}>
                <p className = "w3-padding w3-red" style = {{width:"auto",borderRadius:30,justifyContent:"flex-end"}}>{ReactEmoji.emojify(props.msg.text)}</p>
                </div>
                </div>)
    }
}

export default msg