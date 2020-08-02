import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Name from './Styles/Name'
import Routing from './Routing'
class Header extends Component {
    constructor(){
        super()
        this.state = {
            NameShow:true
        }
    }
render(){return (
    <div>
        {this.state.NameShow?<Name onClickHandler = {()=>{this.setState({NameShow:false})}} />:<Routing />}
    </div>
)}
}

ReactDOM.render(<Header />,document.getElementById('root'))