import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Messages } from "./Messages";
import Input from "./Input";

export const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
      </div>
      < Messages/>
      <Input/>
    </div>
  );
};

