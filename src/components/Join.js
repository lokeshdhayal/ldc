import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Join = () => {
    const [room,setRoom] = useState("")
    const [name,setName] = useState("")
    return (
        <div className ="row" style = {{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className = "card col-6 m-3 p-3">
            <label>Enter Name:</label>
            <input type = "text" onChange = {(e)=>setName(e.target.value)} className = "form-control" />
            <label>Emter room:</label>
            <input type = "text" onChange = {(e) => setRoom(e.target.value)}  className = "form-control"/>
            <Link to = {`/chat?user=${room}&room=${name}`} className ="btn btn-block btn-info m-2">Sign In</Link>
        </div>
        </div>
    )
}

export default Join