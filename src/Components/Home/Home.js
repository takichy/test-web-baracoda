import React, { Component } from 'react'
import Header from '../Header/Header';
import './css/Home.css';
import Clients from '../../Constants/ClientList';
class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            address: '',
            check: 0
        }
        this.getDetails = this.getDetails.bind(this);
    }

    getDetails(e) {
        this.setState({
            address: Clients.CLIENT_LIST[e.currentTarget.value - 1].address,
            check: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                <Header />
                <br />
                <div className="col-md-6 table-wrapper-scroll-y my-custom-scrollbar">
                    <table className="table table-bordered table-striped mb-0">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Nom</th>
                                <th scope="col">Prénom</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Clients.CLIENT_LIST.map(client => (
                                    <tr key={client.id}>
                                        <th scope="row">
                                            <input type="radio" name="site_name"
                                                value={client.id}
                                                onChange={this.getDetails} />
                                        </th>
                                        <td>{client.firstname} </td>
                                        <td>{client.lastname} </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="card col-md-6">
                    <div className="card-header primary">
                        Détails
                        </div>
                    <div className="card-body">
                        <h5 className="card-title">Adresse :</h5>
                        <p className="card-text">{this.state.address}</p>
                    </div>
                </div>

            </div>
        )
    }
}
export default Home;