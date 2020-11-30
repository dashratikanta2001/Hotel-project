import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './Content/Loginapi';
import Header from './Header';
import Footer from './Footer';
import Add from './Content/Add';
import Update from './Content/myupdate';
import Delete from './Content/Delete';
var add=`/${sessionStorage.getItem('id')}add`
var update=`/${sessionStorage.getItem('id')}update`
var del=`/${sessionStorage.getItem('id')}delete`
var ses=`${sessionStorage.getItem('id')}`;

class Rrt extends Component{
    constructor(){
        super()
    }
 
    render(){
        return(
<div>
        if (ses==="5f9f68ba213759f530667ab7"){
            <div>
            <Header/>
            <Route exact path="/" component={Login}></Route>
            <Route path={add} component={Add}></Route>
            <Route path={update} component={Update}></Route>
            <Route path={del} component={Delete}></Route>
            <Footer/>
            </div>
            
        }
        else{
        <Route exact path="/" component={Login}></Route>
        }
        </div>
        )
    }
}

export default Rrt;
