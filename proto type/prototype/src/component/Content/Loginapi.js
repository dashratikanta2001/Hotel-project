import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Login.css';
 const logurl ="https://devapirt.herokuapp.com/mylogin/login";
 class login extends Component{
     constructor(){
         super()
         this.state={
             id:'',
             uname:'',
             psw:'',
             username:'',
             password:'',
             Login:''
         }
     }
     handleuser =(event) =>{
         
         this.setState({username:event.target.value})
     }
     handlepsw =(event) =>{
         this.setState({password:event.target.value})
     }
     handlesubmit =() =>{
         if (this.state.uname===this.state.username && this.state.psw===this.state.password){
            this.setState({Login:1})
            sessionStorage.setItem('id',this.state.id)
            this.props.history.push('/')
            window.location.reload();
         }
         else{
            sessionStorage.setItem('id',"invalid")
             alert('Please Enter Correct Userid Or Password')
             window.location.reload();
             
         }
     }
     render(){
         console.log(`uname`,this.state.uname)
         console.log(`psw`,this.state.psw)
         console.log(`username`,this.state.username)
         console.log(`password`,this.state.password)
         console.log(`login`,this.state.Login)
        return(
            <React.Fragment>
                <div className="container">
                    <div className=" content panel panel-primary">
                                    <div className="panel-heading">
                                       <center>
                                       LOGIN SCREEN
                                        </center>
                                    </div>
                                    <div className="panel-body bgclass">
                                    <label > Enter User Name</label>
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="glyphicon glyphicon-user"></i>
                                            </span>
                                            <input placeholder=" Enter User Name" className="form-control" onChange={this.handleuser} required/>
                                        </div>
                                        <label>Enter Password</label>
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="glyphicon glyphicon-lock"></i>
                                            </span>
                                            <input type="password" placeholder=" Enter password"  className="form-control" onChange={this.handlepsw} required/>
                                        </div>
                                    </div>
                                    <div className="panel-footer">
                                        <center>
                                            <button type="submit" className="btn btn-danger btn-lg" onClick={this.handlesubmit} >Submit</button>
                                        </center>
                                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
     }
     componentDidMount(){
        fetch(logurl,{method:'GET'})
        .then((res)=> res.json())
        .then((data) =>{this.setState({uname:data[0].username,psw:data[0].password,id:data[0]._id})})
    }
 }
 export default withRouter(login)