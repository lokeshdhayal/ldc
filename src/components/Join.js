import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Join = () => {
    const [room,setRoom] = useState("")
    const [name,setName] = useState("")
    return (
        <div>
            <input type = "text" onChange = {(e)=>setName(e.target.value)} />
            <input type = "text" onChange = {(e) => setRoom(e.target.value)} />
            <Link to = {`/chat?user=${room}&room=${name}`}>Sign In</Link>
        </div>
    )
}

export default Join