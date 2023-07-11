import React from "react";
import "./css/footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle"
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

function Footer(){
    return(
        <div className="footer">
           <div className="footer_left">
            <img className="footer_albumlogo" 
            src="https://media.pitchfork.com/photos/5dc5d7873af4630009dbe6ab/16:9/w_1280,c_limit/can'tbuy.jpg"
            alt=""/>
            <div className="footer_songInfo">
                <h4>Do it Again</h4>
                <p>Steely Dan</p>
            </div>
           </div>
           <div className="footer_center">
           <ShuffleIcon className="footer_green"/>
           <SkipPreviousIcon className="footer_icon"/>
           <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
           <SkipNextIcon className="footer_icon"/>
           <RepeatIcon className="footer_green"/>
           </div>

           <div className="footer_right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider aria-labelledby="continuous-sliding"/>
                </Grid>
            </Grid>
           </div>
        </div>
    )
}
export default Footer;