import React from 'react'

class Name extends React.Component {
     
    constructor(){
        super()
        this.state = {
            timer:false,
            height:100
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                timer:true,
                height:50
            })
        },3000)
    }
    render(){return (
        <div>
        <div className="w3-animate-top" style={{display:"flex",justifyContent:"center",height:`${this.state.height}vh`,alignItems:"center"}}> 
            <h1 style={{color:"green",fontSize:100,fontFamily:"Comic Sans MS, cursive, sans-serif"}}>L</h1>
            <h1 style={{color:"tomato",fontSize:100,fontFamily:"Comic Sans MS, cursive, sans-serif"}}>O</h1>
            <h1 style={{color:"teal",fontSize:100,fontFamily:"Comic Sans MS, cursive, sans-serif"}}>O</h1>
            <h1 style={{color:"aqua",fontSize:100,fontFamily:"Comic Sans MS, cursive, sans-serif"}}>S</h1>
            <h1 style={{color:"yellow",fontSize:100,fontFamily:"Comic Sans MS, cursive, sans-serif"}}>E</h1>
            <h1 style={{color:"blue",fontSize:100,fontFamily:"Comic Sans MS, cursive, sans-serif"}}>R</h1>
            </div>
            <div style={{display:"flex",justifyContent:"center",height:`${30}vh`,alignItems:"center"}}>
        {this.state.timer?<button className="w3-btn w3-yellow w3-animate-zoom w3-hover-teal" style={{fontSize:25,padding:15}}>Get start<span style={{margin:10}} className="fa fa-arrow-right"></span></button>:''}
        </div>
        </div>
    )}
}

export default Name