import React,{Component} from 'react';
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
var id=sessionStorage.getItem('id')
class Routing extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(`id===`,id)
        if (id !==null && id !=="invalid" && id) {
           return(
            <BrowserRouter>
                <Header/>
                <Route exact path="/"></Route>
                <Route path={add} component={Add}></Route>
                <Route path={update} component={Update}></Route>
                <Route path={del} component={Delete}></Route>
                <Footer/>
            </BrowserRouter>)
   
        }
        else{
            return(
                <BrowserRouter>
                     <Route exact path="/" component={Login}></Route>
                </BrowserRouter>
            )
        }
    
    }
}

export default Routing;