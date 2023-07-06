import React, { useEffect, useState } from "react";
import FaceIcon from '@mui/icons-material/Face';
import Face2Icon from '@mui/icons-material/Face2';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Dashboard(){
    const [users, setUsers] = useState({})
    const [hideSpan, setHideSpan] = useState(true)
    
    useEffect(() => {
        fetch('https://randomuser.me/api/?results/.json')
            .then((response) => response.json())
            .then((data) => setUsers(data.results[0].name)
            )
            .catch((err) => console.log(err.message)
            )
        }, [])
        
    const handleSpan = (() => {
        if (hideSpan === true){
            setHideSpan(false);
        }else{
            setHideSpan(true)
        }

    })

    return(
        <div id="dash-container">

            <div id="left-side">
                <Link to="/">
                    <LogoutIcon/>
                </Link>

                <div>
                    <Button id="menu" aria-label="Example" onClick={handleSpan}>
                        <MoreVertIcon />
                    </Button>

                    <div className="menu-btns" style={{display: (hideSpan? "none": "block")}}>
                        <Link to="/upload">
                            <Button>Capture/Files Item</Button>
                        </Link>
                        <Button>Orders</Button>
                        <Button>Medical/Dental</Button>
                        <Button>Counseling</Button>
                        <Button>LES</Button>
                        <Button>Travel</Button>
                    </div>
                </div>

                <Button id="resource-btn" variant="outlined">Resources</Button>
            </div>

            <div id="mid-page">
                <div id="bio">
                    <FaceIcon id="bio-pic" style={{width: 70, height:70}}/>
                    <div>
                        <h1>{users.title}. {users.last}</h1>
                        <p id="user-title">Host, Listener (speaking)</p>
                    </div>
                </div>

                <div className="mid-section">
                    <Button id='mid-btn'>People You Know</Button> <br/>
                    <FaceIcon id="ppl"/><Face2Icon id="ppl"/><FaceIcon id="ppl"/><Face2Icon id="ppl"/> <br/>
                    <Button id='mid-btn'>Messages</Button>
                </div>
            </div>

            
        </div>
    )
}