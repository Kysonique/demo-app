import React from "react";
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function LandingPage(){
    return(
        <div>
            <Link to="/login">
                <LoginIcon id="login-btn"/>
            </Link>
            
            <div>
                <h1>Welcome!</h1>
                <Button>Log in with Google</Button>
                <Button>Continue with Apple</Button>
                <Button>Register New User</Button>
            </div>

        </div>
    )
}