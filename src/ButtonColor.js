import React from 'react'

const ButtonColor = (props) =>{
    return(
        <div style={{padding:10}}>
            <button onClick= {()=>props.colorss("pink")} className="w3-pink w3-button w3-margin w3-padding" style={{width:80}} >pink</button>
            <button onClick= {()=>props.colorss("teal")} className="w3-teal w3-button w3-margin w3-padding" style={{width:80}} >teal</button>
            <button onClick= {()=>props.colorss("tomato")} className="w3-tomato w3-button w3-margin w3-padding" style={{width:80}} >tomato</button>
            <button onClick= {()=>props.colorss("orange")} className="w3-orange w3-button w3-margin w3-padding" style={{width:80}} >orange</button>
            <button onClick= {()=>props.colorss("red")} className="w3-red w3-button w3-margin w3-padding" style={{width:80}} >red</button>
            <button onClick= {()=>props.colorss("aqua")} className="w3-aqua w3-button w3-margin w3-padding" style={{width:80}} >aqua</button>
            <button onClick= {()=>props.colorss("yellow")} className="w3-yellow w3-button w3-margin w3-padding" style={{width:80}} >yellow</button>
            <button onClick= {()=>props.colorss("df")} className="w3-teal w3-button w3-margin w3-padding" style={{width:80}} >df</button>
            <button onClick= {()=>props.colorss("pink")} className="w3-teal w3-button w3-margin w3-padding" style={{width:80}} >pink</button>

        </div>
    )
}
export default ButtonColor