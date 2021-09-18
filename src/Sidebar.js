
import React from "react";
import "./Sidebar.css";

import SidebarOption from "./SidebarOption";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
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
            <SidebarOption Icon={Gi3DGlasses} text="Explore" />
            <SidebarOption Icon={GiWaxTablet} text="Notifications" />
            <SidebarOption Icon={GiLetterBomb} text="Messages" />
            <SidebarOption Icon={AiOutlineProfile} text="Lists" />
            <SidebarOption Icon={GiMightyForce} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar__tweet" fullWidth >Decree</Button>



        </div>
    )
}

export default Sidebar
