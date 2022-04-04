import React from 'react';
import { Table } from 'react-bootstrap';



export default class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams : []
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }}

        fetch('https://api.pandascore.co/teams?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    teams : data
                });
            });
    }
    render() {
        return(
            <>
                <h1>Teams list</h1>
                <div>{this.state.teams === 0 && "Aucun jeux trouvés"}</div>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Logo</th>
                                <th>Name</th>
                             
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.teams.length > 0 && this.state.teams.map(team =>
                                <tr>
                                    <td>{team.id}</td>
                                    <td><img src={team.image_url} width={100} height={100}></img></td>
                                    <td>{team.name}</td>

                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}