import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Menu from './Content/menu/item'

var ses=`${sessionStorage.getItem('id')}`;
var add="";
var update="";
var del="";
if (ses==="5f9f68ba213759f530667ab7"){
     add="/5f9f68ba213759f530667ab7add"
     update="/5f9f68ba213759f530667ab7update"
     del="/5f9f68ba213759f530667ab7delete"
}
else{
     add="/"
     update="/"
     del="/"
}

class Header extends Component{
    constructor(){
        super()
        this.state={
            dat:''
        }
    }
    handlelogout =() =>{
        
            sessionStorage.setItem('id',"invalid")
            this.setState({dat:"/"})
            window.location.reload()
        

        
    }
    render(){
        console.log(`dat value= `,this.state.dat)
    return(
        <React.Fragment>
            <div>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="finalroute"><img src="https://content3.jdmagicbox.com/comp/rourkela/a9/9999px661.x661.170511131851.i7a9/catalogue/the-prestige-hotel-and-convention-civil-township-rourkela-hotels-lo2rr6bv01.jpg" className="img imgresponsive" style={{marginLeft:50,height:30,width:50}}></img></Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                    <li><Link to={add}>ADD</Link></li>
                    <li><Link to={update}>UPDATE</Link></li>
                    <li><Link to={del}>DELETE</Link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li onClick={this.handlelogout}><Link to={this.state.dat}><span class="glyphicon glyphicon-log-out"></span> Logout</Link></li>
                </ul>
                </div>
            </div>
            </nav>
            <Menu/>
            </div>
            
        </React.Fragment>
    )
    }
}

export default Header;