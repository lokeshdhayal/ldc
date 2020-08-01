import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Name from './Styles/Name'
class Header extends Component {
render(){return (
    <div>
        <Name />
    </div>
)}
}

ReactDOM.render(<Header />,document.getElementById('root'))