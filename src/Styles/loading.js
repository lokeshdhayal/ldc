import React from 'react'
import load from './loading.gif'
const Loading = () => {
    return (
        <div style = {{display:"flex",justifyContent:"center",marginTop:"20px"}}>
            <img src = {load} alt = "loading"/>
        </div>
    )
}

export default Loading