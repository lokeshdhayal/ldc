import React,{useState,useEffect} from 'react'
import JSON from './Json.json'


const Class = (props) => {

    const a = JSON.filter(a => a.name == props.match.params.name)
    console.log(props.match.params.name,JSON)
    const PptDisplay = () => {
        if(a[0].data.ppt == ""){
            console.log(a[0].data.ppt)
            return <div>No Ppt availabel!!!</div>
        }
        else{
            return a[0].data.ppt.map(b=>{
               return <div key = {b}>
                   <iframe src = {b} width="640" height="480" style = {{maxWidth:"100%"}}></iframe>
               </div>
           }
            )
        }
    }
return (
    <div className = "w3-center" style = {{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"100%"}}>
        <h1>{props.match.params.name}</h1> 
        <h3>Book</h3>
        <div>
        <button onClick = {()=>document.getElementById("Book").style.display = "block"} className = "btn btn-info">Book</button>
        </div>
        <div id = "Book" style = {{display:"none"}}>
        {a[0].data.book?<iframe src={a[0].data.book} width = "640" height = "480" style = {{maxWidth:"100%"}}></iframe>:'No Book'}
        </div>
        <h3>Tutorial</h3>
        <div>
        <button onClick = {()=>document.getElementById("Tutorial").style.display = "block"} className = "btn btn-info">Book</button>
        </div>
        <div id = "Tutorial" style = {{display:"none"}}>
        {a[0].data.tutorial?<iframe src = {a[0].data.tutorial} width="640" height="480"></iframe>:"No tutorial"}
        </div>
        <h3>Paper</h3>
        <div>
        <button onClick = {()=>document.getElementById("Paper").style.display = "block"} className = "btn btn-info">Book</button>
        </div>
        <div id = "Paper" style = {{display:"none"}}>
        {a[0].data.paper?<iframe src = {a[0].data.paper} width="640" height="480"></iframe>:"No paper"}
        </div>
        <h3>Ppt</h3>
        <div>
        <button onClick = {()=>document.getElementById("Ppt").style.display = "block"} className = "btn btn-info">Book</button>
        </div>
        <div id = "Ppt" style = {{display:"none"}}>
            {PptDisplay()}
        </div>
    </div>
)   
}
export default Class