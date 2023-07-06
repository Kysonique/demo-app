import React from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <div>
            <form>
                <TextField
                    id="outlined-basic" 
                    label="Username" 
                    variant="outlined"/>

                <TextField
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined"/>

                <Link to="/Dashboard">
                    <Button>Login</Button>
                </Link>
            </form>
        </div>
    )
}