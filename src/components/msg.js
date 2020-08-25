import React from 'react'

const msg  = (props) => {
    if(props.msg.user !== "me"){
    return (
        <div key = {Math.random()}>
            <p className = "w3-blue w3-padding" style = {{maxWidth:"70%",borderRadius:30}}>{props.msg.text}{props.msg.user}</p>
            </div>)
    }
    else{
        return (
            <div key = {Math.random()} style = {{justifyContent:"flex-end"}}>
                <p className = "w3-red w3-padding" style = {{maxWidth:"70%",borderRadius:30,justifyContent:"flex-end"}}>{props.msg.text}{props.msg.user}</p>
                </div>)
    }
}

export default msg