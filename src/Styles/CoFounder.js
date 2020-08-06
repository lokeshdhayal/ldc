import React, { useState, useEffect } from 'react'
import Ashok from './ad.jpg'
import Sunita from './s1.jpg'
import Md from './md.jpg'
const CoFounder = () => {
    return(
        <div>
        <div className="row">
            <div className="w3-display-container w3-hover-opacity w3-margin" style={{width:150,height:170}} >
            <img src={Ashok} alt="Avatar" style={{width:150,height:170}} />
            <div className="w3-display-middle w3-display-hover">
                  <button className="w3-button w3-black">Ashok</button>
                </div>
            </div>
            <div className="w3-display-container w3-hover-opacity w3-margin" style={{width:150,height:170}}>
            <img src={Sunita} alt="Avatar" style={{width:150,height:170}} />
            <div className="w3-display-middle w3-display-hover">
                  <button className="w3-button w3-black">Sunita</button>
                </div>
            </div>
            <div className="w3-display-container w3-hover-opacity w3-margin" style={{width:150,height:170}}>
            <img src={Md} alt="Avatar" style={{width:150,height:170}} />
            <div className="w3-display-middle w3-display-hover w3-center">
                  <button className="w3-button w3-black">Mahendra</button>
                </div>
            </div>
    </div> 
    
</div>

    )
}

export default CoFounder

     
    