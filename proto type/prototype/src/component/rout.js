import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './Content/Loginapi';
import Routing from './Routing';
import Header from './Header';
import Footer from './Footer';
import Add from './Content/Add';
import Update from './Content/myupdate';
import Delete from './Content/Delete';
import ert from './rt';
var add=`/${sessionStorage.getItem('id')}add`
var update=`/${sessionStorage.getItem('id')}update`
var del=`/${sessionStorage.getItem('id')}delete`
var ses=`${sessionStorage.getItem('id')}`;


const Router = () => {
    return(
        <BrowserRouter>
           <div>
               <ert/>
           </div>
        </BrowserRouter>
    )
}

export default Router;
