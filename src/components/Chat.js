import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
var socket
const Chat  = ({location}) => {
    const ENDPOINT = "http://localhost:2000"
    const [message,setMessage] = useState("")
    const [messages,setMessages] = useState([])
    useEffect(()=>{
        var {user,room} = queryString.parse(location.search)
        socket = io("https://lokeshchatserver.herokuapp.com/")
        var name = user
        socket.emit("join",{name,room})
        return () => {
            socket.on("disconnect")
            socket.off()
        }
    },[ENDPOINT,location])
    useEffect(()=>{
        socket.on("message",({text,user})=>{
            setMessages([...messages,{"text":text,"user":user}])
        })
    })
    const sendMessageClick = (e) => {
        socket.emit("sendMessage",{message})
        setMessages([...messages,{text:message}])
        setMessage("")
    }
    return (
        <div>
            {messages.map(a=>(<p key = {Math.random()}>{a.text}</p>))}
            <input type = "text" onChange = {(e)=>setMessage(e.target.value)} value = {message} />
            <button onClick = {()=>sendMessageClick()}>Send</button>
        </div>
    )
}

export default Chat