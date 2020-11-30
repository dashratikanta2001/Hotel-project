import React from 'react';

const Menudisplay =(props) => {
    const renderlist =({itemdata}) => {
        if (itemdata){
            return itemdata.map((item) => {
                return(
                    <div className ="tilecontainer">
                        <div className="card">
                        <img src="dish2.jpg" alt=""/>
                        <div className="blogcontent">
                        <h3>{item.name}<span>(PRICE)</span></h3>
                        <p>{item.price}</p>
                        </div>  
                        </div>
                    </div>
                )
            })
        }
        else{
            return(
                <div>
                    <h1>please wait .........</h1>
                </div>
            )
        }
    }
    return(
        <React.Fragment>
            <div>
                {renderlist(props)}
            </div>
        </React.Fragment>
    )
}
export default Menudisplay