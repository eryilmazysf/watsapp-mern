import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://images.unsplash.com/photo-1494029722188-672a328c4989?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
