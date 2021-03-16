import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";

class Signup extends React.Component{
    constructor() {
        super();
        this.state = {
            nombre:'',
            apellidoPaterno:'',
            username:'',
            password:'',
        }
    }
    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    buttonOnClick(e){
        //Signup
        let user = {
            nombre: this.state.nombre,
            apellidoPaterno: this.state.apellidoPaterno,
            username: this.state.username,
            password: this.state.password
        }

        APIInvoker.invokePOST(`/users/signup`,user, data => {
            alert(JSON.stringify(data))

        }, error => {
            alert(JSON.stringify(error))
        })
        /* usernameValidate
        APIInvoker.invokeGET(`/users/usernameValidate/${this.state.username}`, data => {
            alert(JSON.stringify(data))
        }, error => {
            alert(JSON.stringify(error))
        })*/
        e.preventDefault();
    }
     render(){
        return(
            <div>
                <h1>Registro de usuarios</h1>
                <form onSubmit={this.crearCuenta.bind(this)}>
                    <div>
                        <label htmlFor='idRol'>Tipo de usuario</label>
                        <select name="idRol" id="idRol" value={this.state.idRol} onChange={this.changeField.bind(this)}>
                            <option value="1">Alumno</option>
                            <option value="2">Director</option>
                            <option value="3">Asesor Académico</option>
                        </select>
                        <label ref={self=> this.idRol = self}></label>
                    </div>
                    <div>
                        <label htmlFor='nombre'>Nombre</label>
                        <input type='text'
                               id='nombre'
                               name='nombre'
                               placeholder='Luis'
                               value={this.state.nombre}
                               onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.nombre = self}></label>
                    </div>
                    <div>
                        <label htmlFor='apellidoPaterno'>Apellido paterno</label>
                        <input  type='text'
                                id='apellidoPaterno'
                                name='apellidoPaterno'
                                placeholder='Perez'
                                value={this.state.apellidoPaterno}
                                onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.apellidoPaterno = self}></label>
                    </div>
                    <div>
                        <label htmlFor='username'>Nombre de usuario</label>
                        <input  type='text'
                                id='username'
                                name='username'
                                placeholder='Luis33'
                                value={this.state.username}
                                ref={self => this.inputUsername = self}
                                onChange={this.changeField.bind(this)}
                                onBlur={this.validateUsername.bind(this)}/>
                        <label ref={self=> this.username = self}></label>
                    </div>
                    <div>
                        <label htmlFor='password'>Contraseña</label>
                        <input  type='password'
                                id='password'
                                name='password'
                                placeholder='*********'
                                value={this.state.password}
                                onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.password = self}></label>
                    </div>

                    <button
                        onClick={this.buttonOnClick.bind(this)}>
                        Crear cuenta
                    </button>
                    <div ref={self => this.messageError = self}></div>
                </form>
            </div>
        )
     }



}
export default  Signup;