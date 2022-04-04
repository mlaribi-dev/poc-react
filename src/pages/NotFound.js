import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";


export default class NotFound extends React.Component
{
    render()
    {
        return(
            <>
                <h1>ERROR 404</h1>
                <Link to="/">
                    <button type="button">
                        Back home
                    </button>
                </Link>
                
            </>

        )
    }
}