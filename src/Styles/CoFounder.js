import React, { useState, useEffect } from 'react'
import Prajjwal from '../Prajjwal.JPG'
import Prashant from '../Prashant.JPG'
import Mayank from '../Mayank.JPG'
const CoFounder = () => {
    return(
        <div>
        <div className="row">
            <div className="w3-display-container w3-hover-opacity w3-margin">
            <img src={Mayank} alt="Avatar" style={{maxWidth:"100%"}} />
            <div className="w3-display-middle w3-display-hover">
                  <button className="w3-button w3-black">Mayank</button>
                </div>
            </div>
            <div className="w3-display-container w3-hover-opacity w3-margin">
            <img src={Prashant} alt="Avatar" style={{maxWidth:"100%"}} />
            <div className="w3-display-middle w3-display-hover">
                  <button className="w3-button w3-black">Prashant</button>
                </div>
            </div>
            <div className="w3-display-container w3-hover-opacity w3-margin">
            <img src={Prajjwal} alt="Avatar" style={{maxWidth:"100%"}} />
            <div className="w3-display-middle w3-display-hover w3-center">
                  <button className="w3-button w3-black">Prajjwal</button>
                </div>
            </div>
    </div> 
    
</div>

    )
}

export default CoFounder

     
    