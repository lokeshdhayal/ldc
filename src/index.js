import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Name from './Styles/Name'
import Body from './Body'
class Header extends Component {
    constructor(){
        super()
        this.state = {
            NameShow:true
        }
    }
render(){return (
    <div>
        {this.state.NameShow?<Name onClickHandler = {()=>{this.setState({NameShow:false})}} />:<Body />}
    </div>
)}
}

ReactDOM.render(<Header />,document.getElementById('root'))