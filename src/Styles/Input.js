import React from 'react'
import { findLastIndex } from 'lodash'


const InputHandler = () => {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="border w3-padding card w3-padding w3-margin card w3-card" style={{width:500}}>
            <label>Name:</label>
            <input type="text" className="form-control" />
            <label>Enter you question</label>
            <textarea type="text" className="form-control" />
            <button className="btn  w3-green m-2">Submit</button>
        </div>
        </div>
    )
}


export default InputHandler