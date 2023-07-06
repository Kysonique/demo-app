import React from "react";
import { Link } from "react-router-dom";


export default function NavigationBar(){
    return(
        <div className="navi">
            <Link to='/Dashboard'>
                <p>Login</p>
            </Link>

            <Link to='/'>
                <p>Logout</p>
            </Link>
        </div>
    )
}