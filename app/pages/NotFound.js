import React from 'react'
import {Link} from 'react-router-dom'
import chemms from'../assets/icons/cheems.jpg';

class NotFound extends React.Component {
    render(){
        return(
            <div>
                <img src={chemms} alt="" className="d-inline-block align-top" />
            </div>
        )
    }
};
export default NotFound;
