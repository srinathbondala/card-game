import React from "react"
import { Typography } from "@mui/material"
const Over: React.FC = () => {
    return (
        <div style={{height: '70vh', display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <Typography variant="h4">Game Over!!</Typography>
            <br />
            <button onClick={()=>window.location.reload()}>Restart</button>
        </div>
    );
}

export default Over;