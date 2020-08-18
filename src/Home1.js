import React, { useState, useEffect } from 'react'
import DSC_01 from './DSC_0212.jpg'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Home1 = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        fetch("https://lokeshdhayalcharanwas.herokuapp.com/courses/list")
        .then(rsp=>rsp.json())
        .then(rsp=>{
            setData(rsp)
            setLoading(false)
})
        .catch(err=>console.log("err"))
    },[data])

    const renderData = () => {
        if(data){
        return data.map(a=>{
            return (
                <div key = {a._id}>
                <div className="w3-margin" style = {{width:"300px"}}>
            <h3>{a.name}</h3>
                    <img src = {a.url} style = {{width:"240px",height:"240px"}} />
                    <Link to = {`/Class/${a.name}`} className = "btn btn-info">ABOUT</Link>
                    </div>
                </div>
            )
        })
        }
    }

    if(loading){
        return <div style = {{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src = "https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-7.gif" style = {{maxWidth:"100%"}} />
        </div>
    }
    else{
    return (
        <div style = {{margin:"10px"}}>
      <img src = {DSC_01} style = {{maxWidth:"100%"}} />
      <div className = "row" style = {{display:"flex",justifyContent:"center"}}>
          {renderData()}
          
      </div>
      <Footer />
        </div>
    )
    }
}

export default Home1