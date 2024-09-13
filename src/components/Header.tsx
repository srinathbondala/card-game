import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Grid2} from '@mui/material';
const Header : React.FC<{scoreVal : number}> = ({scoreVal}) =>{
   return (
    <div className='headerDiv'>
        <Grid2 container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid2 size={4} >
                <Typography variant="h4" sx={{textAlign: 'start'}}>Card Game</Typography>
            </Grid2>
            <Grid2 size={4}>
               {/* <Typography variant="h5"><Link to='/score'>SCORE: {scoreVal}</Link></Typography> */}
               <Typography variant="h4">SCORE: {scoreVal}</Typography>
            </Grid2>
            <Grid2 size={4}>
                <Typography variant="h5" sx={{textAlign: 'end'}}><Link to='/help'>HELP</Link></Typography>
            </Grid2>
        </Grid2>
    </div>
   )
}

export default Header;