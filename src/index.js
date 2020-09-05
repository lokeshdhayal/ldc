import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Name from './Styles/Name'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'
import Main from './Voice/Main'
class Header extends Component {
    constructor(){
        super()
        this.state = {
            NameShow:false
        }
    }
render(){
    if(this.state.NameShow){
        return <Name onClickHandler = {()=>{this.setState({NameShow:false})}} />
    }
    else{
    return (
    <BrowserRouter>
    <Main />
        <Home />
    </BrowserRouter>
)
}
    }
}

ReactDOM.render(<Header />,document.getElementById('root'))


