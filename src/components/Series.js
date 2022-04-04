import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";


export default class Series extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series : []
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }}

        fetch('https://api.pandascore.co/series?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    series : data
                });
            });
    }
    render() {
        return(
            <>
                <h1>Series list</h1>
                <div>{this.state.series === 0 && "Aucun jeux trouvés"}</div>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.series.length > 0 && this.state.series.map(serie =>
                                <tr>
                                    <td>{serie.id}</td>
                                    <td>{serie.name}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}