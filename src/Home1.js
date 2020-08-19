import React, { useState, useEffect } from 'react'
import DSC_01 from './DSC_0212.jpg'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Loading from './Loading'
import Joke from './Joke.jpg'
const Home1 = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch("https://lokeshdhayalcharanwas.herokuapp.com/courses/list")
        .then(rsp=>rsp.json())
        .then(rsp=>{
            var a = rsp.filter(a => a.number == -1)
            setData(a)
            setLoading(false)
})
        .catch(err=>console.log("err"))
    },[data])

    const renderData = () => {
        if(data){
        return data.map(a=>{
            return (
                <div key = {a._id}>
                <div className="w3-margin w3-card w3-center" style = {{width:"300px"}}>
            <h3>{a.name}</h3>
                    <img src = {a.url} style = {{width:"240px",height:"240px"}} />
                    <Link to = {`/Class/${a.name}`} className = "btn btn-info m-2">ABOUT</Link>
                    </div>
                </div>
            )
        })
        }
    }


    if(loading){
        return <Loading />
    }
    else{
    return (
        <div style = {{margin:"10px"}}>
      <img src = {DSC_01} style = {{maxWidth:"100%"}} />
      <div className = "row" style = {{display:"flex",justifyContent:"center"}}>
          {renderData()}
          <button className = "fixed-bottom m-3 w3-aqua" onClick = {() => document.documentElement.scrollTop = 0}><i className = "fa fa-angle-double-up p-2"></i></button>
        
      </div>
      <div className = "w3-modal" style = {{display:"block",maxWidth:"100%"}} id = "modal">
            <div className = "w3-modal-content">
                <div className = "w3-container">
                    <span className = "w3-btn w3-right" onClick = {()=>document.getElementById("modal").style.display = "none"}>X</span><br />
                    <div>
                        <p>We made this For electrical student .</p>
                        <p>Please Provide Feedback in help section so we can we improve ourself.</p>
                        <p>Thanks</p>
                        <img src = {Joke} alt = "Joke" style = {{maxWidth:"60%",display:"none"}} id = "IMG" /><br />
                        <p className = "w3-text-red">After Seeing this website please don't feel like</p>
                        <div style = {{display:"flex",justifyContent:"space-between"}}>
                        <button  className = "w3-btn w3-green w3-margin" onClick = {()=>document.getElementById("IMG").style.display = "block"}>SEE</button>
                        <button className = "w3-btn w3-green w3-margin" onClick = {()=>document.getElementById("modal").style.display = "none"}>Got It!!!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
        </div>
    )
    }
}

export default Home1