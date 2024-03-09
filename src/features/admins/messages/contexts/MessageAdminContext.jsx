import React from "react";
import * as livechatApi from "../../../../apis/admins/livechat";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

export const MessageAdminContext = createContext();

function MessageAdminContextProvider({ children }) {
  const [livechat, setLivechat] = useState();

  useEffect(() => {
    livechatApi
      .getAllLivechat()
      .then((res) => setLivechat(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <MessageAdminContext.Provider value={{ livechat }}>
      {children}
    </MessageAdminContext.Provider>
  );
}

export default MessageAdminContextProvider;
