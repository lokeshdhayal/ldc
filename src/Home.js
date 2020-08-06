import React, { useState } from 'react'
import  * as firebase from 'firebase'
import Home1 from './Loggin/Home1'
import Loggin from './Loggin/Loggin'
import SignIn from './Loggin/SignIn'
import LogIn from './Loggin/LogIn'

const Home = (props) =>{
    if(firebase.apps.length === 0){
    var firebaseConfig = {
        apiKey: "AIzaSyDuMpxxdm84AyB9NzT7AE8JbR01tfmtwAo",
        authDomain: "arvel-783f8.firebaseapp.com",
        databaseURL: "https://arvel-783f8.firebaseio.com",
        projectId: "arvel-783f8",
        storageBucket: "arvel-783f8.appspot.com",
        messagingSenderId: "442449306220",
        appId: "1:442449306220:web:af9dc7bbe69cc16250ee49",
        measurementId: "G-77THF29ZFH"
      };
      firebase.initializeApp(firebaseConfig)
    }

    const [signup,setSign] = useState(false)
    const [loggin,setLoggin] = useState(false)
    firebase.auth().onAuthStateChanged((user)=>{
        if(user === null){
            setLoggin(false)
        }
        else{
            setLoggin(true)
        }
    })
    return <Home1 colors={props.colors} />
    if(loggin){
        
    }
    else {
        if(signup){
        return <SignIn sinf = {()=>setSign(false)} />}
        else {
            return(
                <LogIn sinf = {()=>setSign(true)} />
            )
        }
    }
    
}


export default Home