import React from "react";
import Conversation from "./Conversation";
import useChat from "../../../hooks/useChat";
import useAuth from "../../../hooks/useAuth";
import { useRef } from "react";
import { useEffect } from "react";

export default function MainChatConversation() {
  const { conversation } = useChat();
  const { authUser } = useAuth();
  const scrollRef = useRef();
  // console.log(conversation[0].id, "////////////////////////////////");
  // console.log(authUser, "////////////////////");
  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  return (
    <div className="flex flex-col gap-3">
      {conversation.map((chat) => {
        // console.log(chat, "********");
        return (
          <div ref={scrollRef}>
            <Conversation
              key={chat.id}
              chatRoomId={chat.chatRoomId}
              senderFirstName={chat.sender?.firstName}
              senderLastName={chat.sender?.lastName}
              senderId={chat.senderId}
              receiverFirstName={chat.receiver?.firstName}
              receiverLastName={chat.receiver?.lastName}
              receiverId={chat.receiverId}
              message={chat.message}
              createdAt={chat.createdAt}
              ownMessage={chat.senderId === authUser?.id}
            />
          </div>
        );
      })}
    </div>
  );
}
