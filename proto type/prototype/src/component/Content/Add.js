import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Add.css';
//import axios from 'axios';
//import {Link} from 'react-router-dom';

const lurl = "https://devapirt.herokuapp.com/menu";
const add = "https://devapirt.herokuapp.com/add";
var b=Math.floor(Math.random()*10000);
var bb=b.toString()
class Add extends Component{
    constructor(){
        super()

        this.state={
            id:'',
            mealname:'',
            mealid:'',
            itemid:bb,
            name:'',
            price:'',
            image:''
        }
    }

     // Display city data 
    renderCity = (data) => {
        if(data){
            return data.map((itm) => {
                return(
                    <option value={itm._id}>
                        {itm.name}
                    </option>
                )
            })
        }
    }

    handlemeal = (event) =>{
        this.setState({mname:event.target.value})
        const abcid = event.target.value
        const rrurl = `${lurl}/${abcid}`
        fetch(rrurl,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({mealid:data[0].mealid})})
        console.log(rrurl)
    }
    handleitemname = (event) =>{
        this.setState({iname:event.target.value})
    }
    handleitemprice =(event) =>{
        this.setState({iprice:event.target.value})
    }
    handleimage =(event) =>{
        this.setState({image:event.target.value})
    }
    handleSubmit =() => {
        var data = {
            itemid:this.state.itemid,
            name:this.state.iname,
            price:this.state.iprice,
            mealid:this.state.mealid,
            image:this.state.image
        }
        fetch(add,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data),
            
        })
        alert('Data Added Successfully')
        console.log(this.state)
    }

    render(){
        
        console.log(`meal id`,this.state.mealid);
        return(
            
            <React.Fragment>
            <div className="container">
            <div className="panel panel-primary">
                            <div className="panel-heading">
                               <center>
                               ADD
                                </center>
                            </div>
                            <div className="panel-body add-panel-body">
                            <div className="row">
                                <label>Enter Meal Type</label>
                    <select className=" form-control locationDropDown"  onChange={this.handlemeal}>
                    <option>----SELECT MEAL---------</option>
                        {this.renderCity(this.state.id)}
                    </select>
                    <div className="form-group">
                        <label>Enter Item Name</label>
                        <input placeholder="Enter Name here" className="form-control input" onChange={this.handleitemname}></input>
                    </div>
                    <div className="form-group">
                        <label>Enter Price</label>
                        <input placeholder="Enter Price here" className="form-control" onChange={this.handleitemprice}></input>
                    </div>
                    
                </div>
                            </div>
                            <div className="panel-footer ">
                            <center>
                                    <button type="submit" className="btn btn-danger btn-lg" onClick={this.handleSubmit}>Add</button>
                                </center>
                            </div>
            </div>
        </div>
        </React.Fragment>
        )
    }

    // Call City Api on Page Load
    componentDidMount(){
        fetch(lurl,{Method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {this.setState({id:data})})
    }
}

   
export default withRouter(Add);