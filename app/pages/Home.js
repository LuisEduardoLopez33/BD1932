import React from 'react'
import {Link} from 'react-router-dom'
class Home extends React.Component {
    render(){
        return (
            <>
                <h1>Bienvenido a la pagina principal</h1>
                <Link to='/Login'>
                    <h4>Login</h4>
                </Link>
            </>
        )
    }
}
export default Home;