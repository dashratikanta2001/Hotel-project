import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Menudisplay from './menudisplay'
const murl = "https://devapirt.herokuapp.com/menu";
class Menu extends Component{
    constructor(){
        super()

        this.state={
            menu:''
        }
    }
render(){
    console.log(`mnuuuu== `,this.state.menu)
    return(
        <Menudisplay menudata={this.state.menu}/>
    )
}

    componentDidMount(){
        fetch(murl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({menu:data})})
    }
}
export default withRouter(Menu);