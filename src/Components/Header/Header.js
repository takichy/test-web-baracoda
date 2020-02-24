import React, { Component } from 'react';
import './css/Header.css';
import { Link, Redirect } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
        this.logOut = this.logOut.bind(this);
    }

    componentWillMount() {
        if (sessionStorage.getItem('Login')) {
            console.log('session exist')
        }
        else {
            this.setState({ redirect: true });
        }
    }

    logOut() {
        sessionStorage.setItem('Login', '');
        sessionStorage.clear();
        this.setState({ redirect: true });
    }
    
    render() {
        if (this.state.redirect) {
            return (<Redirect to="/Login" />)
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand" to="/home">Abdelhay</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li>
                            <a href="/" className="nav-link" onClick={this.logOut}>Log Out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header;