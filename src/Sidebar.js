
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Button} from "@material-ui/core"
import Crown from "./Crown";
import { GiMightyForce } from "react-icons/gi";
import { Gi3DGlasses } from "react-icons/gi";
import { GiMedievalPavilion } from "react-icons/gi";
import { GiLetterBomb } from "react-icons/gi";
import { GiWaxTablet } from "react-icons/gi";
import { AiOutlineProfile } from "react-icons/ai";

function Sidebar() {
    return (
        <div className="sidebar">
            <Crown className="sidebar__Crown" />

            <SidebarOption active Icon={GiMedievalPavilion} text="Home" />
            <SidebarOption Icon={GiWaxTablet} text="Guides and Walkthroughs" />
            <SidebarOption Icon={GiLetterBomb} text="Feed" />
            <SidebarOption Icon={AiOutlineProfile} text="About" />
            <SidebarOption Icon={GiMightyForce} text="Profile" />
            

            <Button variant="outlined" className="sidebar__tweet" fullWidth >Decree</Button>



        </div>
    )
}

//           <SidebarOption Icon={Gi3DGlasses} text="Explore" />
//           <SidebarOption Icon={MoreHorizIcon} text="More" />
export default Sidebar;
