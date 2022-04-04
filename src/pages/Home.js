import React from "react";
import { Navbar, Table } from "react-bootstrap";


export default class Home extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                upcomingMatches: [],
                runningMatches: [],
                pastMatches: []
            }
        }
        componentDidMount() {

            const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }}

            fetch('https://api.pandascore.co/matches/upcoming?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    upcomingMatches : data
                });
            })
        ;

            fetch('https://api.pandascore.co/matches/past?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pastMatches : data
                });
            })
        ;
            fetch('https://api.pandascore.co/matches/running?sort=&page=1&per_page=50', options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    runningMatches : data
                });
            })
        ;
            
        }
        render(){
            return(
                <>
                
                    <div>    
                        <div>
                            <h1><i class="fa fa-futbol"></i> Running matches</h1>
                            <Table>
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.runningMatches.length > 0 && this.state.runningMatches.map(match =>
                                <tr>
                                    <td>{match.id}</td>
                                    <td>{match.name}</td>
                                    
                                </tr>
                            )}
                                </tbody>
                            </Table>
                        </div>

                        <div>
                            <h1><i class="fa fa-futbol"></i> Upcoming matches</h1>
                            <Table>
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Date & time</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.upcomingMatches.length > 0 && this.state.upcomingMatches.map(match =>
                                <tr>
                                    <td>{match.id}</td>
                                    <td>{match.name}</td>
                                    <td>{match.scheduled_at}</td>
                                </tr>
                            )}
                                </tbody>
                            </Table>
                        </div>

                        <div>
                            <h1><i class="fa fa-futbol"></i> Past matches</h1>
                            <Table>
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.pastMatches.length > 0 && this.state.pastMatches.map(match =>
                                <tr>
                                    <td>{match.id}</td>
                                    <td>{match.name}</td>
                                </tr>
                            )}
                                </tbody>
                            </Table>
                        </div>
                        
                    </div>
                </>
        )
        
    }
   
}
