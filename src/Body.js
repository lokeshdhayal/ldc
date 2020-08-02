import React, { useState } from 'react'
import NavigationBar from './Navigation'
import ButtonColor from './ButtonColor'
const Body =(props) =>{
    return(
        <div>
            <NavigationBar colors={props.colors} />
        </div>
    )
}

export default Body