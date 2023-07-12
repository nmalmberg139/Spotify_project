import React from "react";
import "./css/Body.css"
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled"
import FavoriteIcon from "@mui/icons-material/Favorite"
import MoreHorizonIcon from "@mui/icons-material/MoreHoriz"
import SongRow from "./SongRow";

function Body({spotify}){
    const [{on_Repeat}] = useDataLayerValue();
    return(
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body_info">
                <img src={on_Repeat?.images[0]?.url}
                alt=""/>
                <div className="body_infoText">
                        <strong>PLAYLIST</strong>
                        <h2>On Repeat</h2>
                        <p>{on_Repeat?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizonIcon />
                </div>


                    {/* list of songs */}
                    {on_Repeat?.tracks.items.map((item) =>(
                        <SongRow track={item.track} />
                    ))}

            </div>
        </div>
    )
}
export default Body;