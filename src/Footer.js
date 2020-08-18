import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="page-footer font-small w3-purple">
            <div className = "container-fluid row">
            <div style = {{width:"500px",maxWidth:"100%",padding:30}}>
                    <p>We are very Happy tha tyou visit our website.This website is made on Laptop so if you find any difficult in using this at Phone.Please let's Know.</p>
                    <p className = "w3-text-aqua">Please Mention your Feedback in Help Section</p>
                    <Link to = "/help" className = "btn btn-info">Feedback</Link>
                </div>
                <div style = {{width:"500px",maxWidth:"100%",margin:10}}>
                    <p>Contact Detail</p>
                    <p><i className = "fa fa-instagram"  style = {{fontSize:40,color:"red",margin:10}} aria-hidden="true"></i>Instagram:Not Available</p>
                    <p><i className = "fa fa-facebook"  style = {{fontSize:40,color:"blue",margin:10}} aria-hidden="true"></i>FaceBook:Not Available</p>
                    <p><i className = "fa fa-github"  style = {{fontSize:40,margin:10}} aria-hidden="true"></i>GitHub:https://github.com/lokeshdhayal</p>
                    <p><i className = "fa fa-google"  style = {{fontSize:40,margin:10}} aria-hidden="true"></i>Email:lokeshdhayalcharanwas@gmail.com</p>
                </div>
            </div>
            <hr/>
            <div className="footer-copyright w3-center">
                <p className = "p-3">&copy;LOOSER MNNIT ELECTRICAL DEPARTMENT 2020</p>
            </div>
</footer>
    )
}

export default Footer