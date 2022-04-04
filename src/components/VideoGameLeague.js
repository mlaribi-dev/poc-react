import React, { useState, useEffect }from "react";
import {Button, Table} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";

export default function VideoGameLeague ()
{
    const [games, setGames] = useState([])
    const [leagues, setLeagues] = useState([])
    // Le UseParams permet de chercher l'élément avec les props
    const { id } = useParams()
    

    useEffect(() =>{
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer UknIj0tPoeY_elDkp0ntkb0xpSJkLxgk8xrVABgpIpVT8T_ak_k'
            }}

            fetch(`https://api.pandascore.co/videogames/${id}`, options)
            .then(response => response.json())
            .then(data => {
                setGames(data)
            })
        ;
            fetch(`https://api.pandascore.co/videogames/${id}/leagues?sort=&page=1&per_page=50`, options)
            .then(response => response.json())
            .then(data => {
                setLeagues(data)
            })
        ;

    },[id])

    return(
        <>
            <div>
                <h1>Leagues of the game  : {games.name}</h1>
                
            </div>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                LOGO
                            </th>
                            <th>
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {leagues.length > 0 && leagues.map(league =>
                                <tr>
                                    <td><img src={league.image_url} alt={league.name} width={100} height={100} /></td>
                                    <td>{league.name}</td>
                                </tr>
                            )}
                    </tbody>
                </Table>
            </div>
        </>
    )
    
    

    
}
