import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  Mic,
  Telegram,
} from "@material-ui/icons";
import axios from "./axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault(); //block refresh
    await axios.post("/messages/new", {
      message: input,
      name: "Demo App",
      timestamp: new Date().toLocaleString(),
      received: false,
    });
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://images.unsplash.com/photo-1494029722188-672a328c4989?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message, index) => (
          <div key={index}>
            <p
              className={`chat__message ${
                message.received && "chat__receiver"
              }`}
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Type a message"
            type="text"
          />
          <IconButton onClick={sendMessage} type="submit">
            <Telegram />
          </IconButton>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
