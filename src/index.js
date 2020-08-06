import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Name from './Styles/Name'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'
class Header extends Component {
    constructor(){
        super()
        this.state = {
            NameShow:true
        }
    }
render(){return (
    <BrowserRouter>
        {this.state.NameShow?<Name onClickHandler = {()=>{this.setState({NameShow:false})}} />:<Home />}
    </BrowserRouter>
)}
}

ReactDOM.render(<Header />,document.getElementById('root'))


