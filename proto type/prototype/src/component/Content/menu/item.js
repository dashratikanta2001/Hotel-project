import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Menudisplay from './menudisplay'
const iurl = "https://devapirt.herokuapp.com/item";
class Item extends Component{
    constructor(){
        super()

        this.state={
            item:''
        }
    }
render(){
    console.log(`itemmm== `,this.state.item)
    return(
        <Menudisplay itemdata={this.state.item}/>
    )
}

    componentDidMount(){
        fetch(iurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({item:data})})
    }
}
export default withRouter(Item);