import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";


export default class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games : []
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }}

        fetch('https://api.pandascore.co/videogames?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    games : data
                });
            });
    }
    render() {
        return(
            <>
                <h1>Games list</h1>
                <div>{this.state.games === 0 && "Aucun jeux trouvés"}</div>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>LEAGUES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.games.length > 0 && this.state.games.map(game =>
                                <tr>
                                    <td>{game.id}</td>
                                    <td>{game.name}</td>
                                    <td>
                                        <Link to={"/games/"+ game.id}>
                                            <Button>
                                                See !
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}