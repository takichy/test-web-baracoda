import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './css/Login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            redirect: false
        }

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(e) {
        e.preventDefault();
        if (this.state.login && this.state.password) {
            sessionStorage.setItem('Login', JSON.stringify(this.state));
            this.setState({ redirect: true });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        if( this.state.redirect || sessionStorage.getItem('Login') ){
            return ( <Redirect to="/home"/>)
        }

        return (
            <div>
                <div className="login-page">
                    <div className="form">
                        <h4>veuillez vous authentifier</h4>
                        <form className="login-form">
                            <div className="row">
                                <label className="col-md-4">Utilisateur </label>
                                <input name="login" className="col-md-8" type="text" placeholder="Utilisateur" required onChange={this.onChange}/>
                            </div>

                            <div className="row">
                                <label className="col-md-4">Mot de passe </label>
                                <input name="password" className="col-md-8" type="password" placeholder="Mot de passe" required onChange={this.onChange} />
                            </div>

                            <input type="submit" className="button" value="Valider" onClick={this.login} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;