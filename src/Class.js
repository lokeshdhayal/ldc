import React,{useState,useEffect} from 'react'
import JSON from './Json.json'


const Class = (props) => {

    const a = JSON.filter(a => a.name == props.match.params.name)
    console.log(a[0].data.book)
return (
    <div className = "w3-center" style = {{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"100%"}}>
        <h1>{props.match.params.name}</h1> 
        <h3>Book</h3>
        {a[0].data.book?<iframe src={a[0].data.book} width = "640" height = "480" style = {{maxWidth:"100%"}}></iframe>:'No Book'}
        <h3>Tutorial</h3>
        {a[0].data.tutorial?<iframe src = {a[0].data.tutorial} width="640" height="480"></iframe>:"No tutorial"}
        <h3>Paper</h3>
        {a[0].data.paper?<iframe src = {a[0].data.paper} width="640" height="480"></iframe>:"No paper"}
    </div>
)   
}
export default Class