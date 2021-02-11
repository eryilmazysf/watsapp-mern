import React from "react";
import "./Sidebar.css";
import { DonutLarge, SearchOutlined, Chat, MoreVert } from "@material-ui/icons";
import { IconButton, Avatar } from "@material-ui/core";

import SidebarChat from "./SidebarChat";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQF5qB_iCTVxsA/profile-displayphoto-shrink_800_800/0/1609956332114?e=1618444800&v=beta&t=SjpNq9UKpkyS6olXKmmF-3FPQ35XAteD53zXx-JLrfI" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge fontSize="small" />
          </IconButton>
          <IconButton>
            <Chat fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVert fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default SideBar;
