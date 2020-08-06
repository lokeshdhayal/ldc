import React,{useState} from 'react'
import * as firebase from 'firebase'
import { Link } from 'react-router-dom'

const SignIn = (props) => {
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    const onChangeUser = (e) => {
        setUser(e.target.value)
    }
    const onChangePass = (e) => {
        setPass(e.target.value)
    }
    const signInF =() => {
        firebase.auth().createUserWithEmailAndPassword(user,pass)
    }
    return (
        <div>
            <div id="name">
            <div  style={{height:"10px"}} >
        <div className="w3-animate-top" style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
            <h1 style={{color:"green",fontSize:75,fontFamily:"Comic Sans MS, cursive, sans-serif"}}>L</h1>
            <h1 style={{color:"tomato",fontSize:75,fontFamily:"Comic Sans MS, cursive, sans-serif"}}>O</h1>
            <h1 style={{color:"teal",fontSize:75,fontFamily:"Comic Sans MS, cursive, sans-serif"}}>O</h1>
            <h1 style={{color:"aqua",fontSize:75,fontFamily:"Comic Sans MS, cursive, sans-serif"}}>S</h1>
            <h1 style={{color:"yellow",fontSize:75,fontFamily:"Comic Sans MS, cursive, sans-serif"}}>E</h1>
            <h1 style={{color:"blue",fontSize:75,fontFamily:"Comic Sans MS, cursive, sans-serif"}}>R</h1>
            </div>
            </div>
            <div style={{display:"flex",justifyContent:"center",height:`${30}vh`,alignItems:"center"}}>
        </div>
        </div>
        <div className="row"  style={{display:"flex",justifyContent:"center"}}>
        <div className="card w3-padding col-6 w3-animate-zoom">
            <div className="card-header w3-teal">
                Sign In
            </div>
            <div className="card-body">
            <label>User Name</label>
            <input className="form-control" placeholder='Enter the name' onChange = {onChangeUser} />
            <label>Password</label>
            <input className="form-control"  placeholder="Enter the Password" onChange = {onChangePass} />
             </div>
             <div className="card-footer w3-center">
                 <button className="btn btn-info" onClick={signInF}>Sign In</button>
             </div>
        </div>
        </div>
        <div   style={{display:"flex",justifyContent:"center"}} className="w3-margin">
        <p>If you don't have account <button className="btn btn-info" onClick={props.sinf}>Log In</button>  </p>
        </div>
        </div>
    )
}

export default SignIn