import React, {useCallback, useRef} from "react"
import { useState } from "react"
import PostAddIcon from '@mui/icons-material/PostAdd';
import TextField from '@mui/material/TextField';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Link } from "react-router-dom";
import Webcam from 'react-webcam'
import { Button } from '@mui/material'



export default function UploadDoc(){
    const [saveData, setSaveData] = useState([])
    const [newTitle, setNewTitle] = useState()
    const [newDescription, setNewDescription] = useState()
    const newID = "QP" + Math.floor(Math.random() * 10000)
    const [hideSpan, setHideSpan] = useState(true)
    
    const handleSaveData = (e) => {
        e.preventDefault()
        setSaveData([{title: newTitle, description: newDescription, image: picture}])
        console.log(saveData)
        setHideSpan(true)
    }
    const HandleShowSpan = (() => {
        if (hideSpan === true){
            setHideSpan(false)
        }
    })
   
//camera controls
    const videoConstraints = {
        width: 400,
        height: 400,
        facingMode: 'user',
    }
    const [picture, setPicture] = useState('')
    const WebcamRef = useRef(null)
    const handleCapture = useCallback(() => {
        const pictureSRC = WebcamRef.current.getScreenshot()
        setPicture(pictureSRC)
    })

    return(
        <div id="uploadDoc">
            <Link to='/Dashboard'>
                <TaskAltIcon/>
            </Link>

            <button id="add-btn" onClick={HandleShowSpan}>
                <PostAddIcon/>
            </button>

            <div style={{marginLeft: "25%"}}>
                <div style={{display: hideSpan? 'none':'block' }}>
                    <div>
                        <Webcam
                            audio={false}
                            width={200}
                            height={400}
                            ref={WebcamRef}
                            screenshotFormat='image/jpeg'
                            videoConstraints={videoConstraints} 
                        />
                        
                        <Button onClick={handleCapture}>Capture</Button>
                    </div>
                </div>
                    <form onSubmit={handleSaveData}>
                        <TextField 
                            onChange={(e) => setNewTitle(e.target.value)} 
                            id="outlined-basic" 
                            label="Title" 
                            variant="outlined"
                            style={{marginBottom: "3%"}}/> <br/>

                        <TextField 
                            onChange={(e) => setNewDescription(e.target.value)} 
                            id="outlined-basic" 
                            label="Description" 
                            variant="outlined" 
                            style={{marginBottom: "3%"}}/> <br/>           
                        <button type="submit">save</button>
                    </form>

                <div style={{border: "2px #23005a solid", width: 250, textAlign: "center"}}>
                    {saveData.map((data) => (
                            <div key={newID}>
                                <h1>{data.title}</h1>
                                <h2>{data.description}</h2>
                            </div>

                    ))}
                        <img src={picture}/>
                </div>
            </div>
        
                
        </div>
    )
}