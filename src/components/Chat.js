import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from 'glamor';
import Message from './msg.js'
var socket
const csss = css({height:500})
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
        setMessages([...messages,{text:message,user:"me"}])
        setMessage("")
    }
    return (
        <div>
            <div style = {{maxwidth:"100%",height:"100px"}} style = {{margin:10}}>
            <ScrollToBottom className = {csss} style = {{adding: "5% 0",overflow: "auto",flex: "auto",display:"flex"}}>
            {messages.map((a,i)=>(
            <div key = {i}>
                <Message msg = {a} />
            </div>))}
                </ScrollToBottom>
                </div>
            <div className = "fixed-bottom container">
                <div style = {{display:"flex",alignItems:"space-between",justifyContent:"space-between",padding:10}}>
            <input type = "text" onChange = {(e)=>setMessage(e.target.value)} className ="form-control m-2 " value = {message} placeholder = "Enter the message here..." />
            <button onClick = {()=>sendMessageClick()} className = "m-2 w3-green"  style = {{borderRadius:"100%"}}><i className = "fa fa-send"></i></button>
            </div>
            </div>
        </div>
    )
}

export default Chat