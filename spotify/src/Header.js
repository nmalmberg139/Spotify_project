import React from "react";
import "./css/header.css"
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "./DataLayer";
function Header(){

    const [{user}] = useDataLayerValue();
    return(
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input 
                placeholder="Search for Artists, Songs, Albums, etc" 
                type="text">

                </input>
            </div>

            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} /> 
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}
export default Header;