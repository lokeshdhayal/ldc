import React, {  Component } from 'react'
import Loading from './loading'
class Help extends Component {

    constructor(){
        super()
        this.state = {
            data:[],
            name:"",
            question:"",
            loading:true
        }
    }
    componentDidMount(){
     {/*   fetch("https://arvels.pythonanywhere.com/queries/",{method:"GET"})
        .then(rsp=>rsp.json())
    .then(rsp=>this.setState({data:[...this.state.data,rsp]})) */}
   // fetch("http://127.0.0.1:8000/food").then(rsp=>rsp.json()).then(a=>console.log(a))
    this.Apicall()

    }

    Apicall = () => {
        this.setState({data:[]})
        fetch("https://arvels.pythonanywhere.com/queries/",{method:"GET"})
        .then(rsp=>rsp.json())
        .then(rsp=>this.setState({data:[...this.state.data,rsp],loading:false}))

    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    onClickHandler = () => {
        var data = {
            name:this.state.name,
            query:this.state.question
        }
        fetch("https://arvels.pythonanywhere.com/queries/",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .catch(err=>console.log(err))
        this.setState({
            name:'',
            question:""
        })
        this.setState({loading:true})
        this.Apicall()

        document.getElementById("ld").innerHTML = "Your query has been successfully submitted!!!!"
    }

    renderData = () => {
        var i = this.state.data[0]
        if(i){
            return i.map(data=>{
                return(<div key={data.id} className="w3-card w3-margin w3-padding w3-display-container">
                    <div className="w3-margin w3-padding">
            <h3>{data.name}</h3>
                    </div>
                    <div className="w3-display-hover w3-margin w3-padding">
                        Question:{data.query}
                    </div>
                    
                    <div className="w3-display-hover w3-margin w3-padding">
                        Answer:{data.answer}
                    </div>
                </div>
                )
            })
        }
    }



render(){
    if(this.state.loading){
        return <Loading />
    }
    else{
return (
    <div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="border w3-padding card w3-padding w3-margin card w3-card" style={{width:500}}>
            <label>Name:</label>
            <input type="text" className="form-control" onChange={this.onChangeHandler} name="name" value={this.state.name} />
            <label>Enter you question</label>
            <textarea type="text" className="form-control" onChange={this.onChangeHandler} name="question" value={this.state.question} />
            <button className="btn  w3-green m-2" onClick = {this.onClickHandler}>Submit</button>
        </div>
        </div>
        <p className="w3-text-green" id="ld"></p>
        <p className="w3-text-red">Note:In mobile click to see question and answer</p>
    <div style={{display:"flex",flexDirection:"column-reverse"}}>{this.renderData()}</div>
    </div>
    )
}}
}


export default Help