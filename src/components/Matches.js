import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";


export default class Matches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matches : []
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }}

        fetch('https://api.pandascore.co/matches?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    matches : data
                });
            });
    }
    render() {
        return(
            <>
                <h1>Matches list</h1>
                <div>{this.state.games === 0 && "Aucun jeux trouvés"}</div>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Date & time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.matches.length > 0 && this.state.matches.map(match =>
                                <tr>
                                    <td>{match.id}</td>
                                    <td>{match.name}</td>
                                    <td>{match.scheduled_at}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}