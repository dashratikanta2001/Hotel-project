import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Update.css';

const lurl = "https://devapirt.herokuapp.com/menu";
const iurl = "https://devapirt.herokuapp.com/item";
const updturl = "https://devapirt.herokuapp.com/update";

class updt extends Component{
    constructor(props){
        super(props)

        this.state={
            id:'',
            item:'',
            itm:'',
            mname:'',
            mealname:'',
            mealid:'',
            itemid:'',
            name:'',
            price:''
        };
        this.handlename = this.handlename.bind(this);
        this.handleitemprice = this.handleitemprice.bind(this);
        
    }
    
    renderCity = (data) => {
        if(data){
            return data.map((ex) => {
                return(
                    <option value={ex._id}>
                        {ex.name}
                    </option>
                )
            })
        }
    }
    handlename(event) {
        this.setState({name: event.target.value});
      }
    handleitemprice(event) {
        this.setState({price: event.target.value});
      }
    handlemeal = (event) =>{
        const abcid = event.target.value
        const rrurl = `${iurl}?mealid=${abcid}`
        fetch(rrurl,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({item:data})})
        console.log(rrurl)
    }
    handleitemname = (event) =>{
        const abid = event.target.value
        const iturl =`${iurl}?itemid=${abid}`
        if (iturl===`${iurl}?itemid=----SELECT ITEM NAME---------`){
            this.setState({name:'',price:''})
        }
        else{
            fetch(iturl,{method:'GET'})
            .then((res) => res.json())
            .then((data) =>{
                
                this.setState({itm:data,name:data[0].name,price:data[0].price,itemid:data[0].itemid})
            })
        }
    }
    renderitem =(data) => {
        if(data){
            return data.map((ex) => {
                return(
                    <option value={ex.itemid}>
                        {ex.name}
                    </option>  
                )
                
            })
        }
    }
    renderitemname =(data) => {
        if(data){
            return data.map((ex) =>{
                return(
                    <input value={ex.name}/>
                )
            })
        }
    }
    handleEdit =() => {
        var bb= this.state.itemid
        var b=bb.toString()
        var p=this.state.price
        var Price=p.toString()
        var data = {
            itemid:b,
            name:this.state.name,
            price:Price
        }
        fetch(updturl,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        alert('Data Updated Successfully')
        
    }
    
    
    render(){
        console.log(`state data is = `,this.state)
        console.log(`itm data `,this.state.itm)
        console.log(`name =====`,this.state.name)
        console.log(`itemid =====`,this.state.itemid)

        return(
            <React.Fragment>
            <div className="container">
            <div className="panel panel-primary">
                            <div className="panel-heading">
                            <center>
                            UPDATE
                                </center>
                            </div>
                            <div className="panel-body add-panel-body">
                            <div className="row">
                                <div className="form-group">
                                    <label>Enter Meal Type</label>
                                    <select className=" form-control locationDropDown"  onChange={this.handlemeal}>
                                    <option>----SELECT MEAL---------</option>
                                    {this.renderCity(this.state.id)}
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label>Select Item Name</label>
                                        <select className=" form-control locationDropDown"  onChange={this.handleitemname}>
                                                <option>----SELECT ITEM NAME---------</option>
                                                {this.renderitem(this.state.item)}
                                            </select>
                                </div>
                                <div className="form-group">
                                            <label>Enter Item Name</label>
                                    <input type="text" placeholder="Enter Name here" className="form-control input" value={this.state.name} onChange={this.handlename}/>
                                </div>
                                <div className="form-group">
                                    <label>Enter Price</label>
                                    <input type="text" placeholder="Enter Price here" value={this.state.price} className="form-control input" onChange={this.handleitemprice}/>
                                    
                                </div>
                            </div>
                            </div>
                            <div className="panel-footer">
                            <center>
                                    <button type="submit" className="btn btn-danger btn-lg" onClick={this.handleEdit}>EDIT</button>
                                </center>
                            </div>
            </div>
        </div>
        </React.Fragment>
        )
}

    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res)=> res.json())
        .then((data) =>{this.setState({id:data})})
    }
}
export default withRouter(updt)