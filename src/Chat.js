import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase.js";
import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import Message from "./Message.js";
import ChatInput from "./ChatInput.js";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      onSnapshot(doc(db, "rooms", roomId), (doc) => {
        setRoomDetails(doc.data());
      });

      onSnapshot(
        query(
          collection(db, "rooms", roomId, "messages"),
          orderBy("timestamp")
        ),
        (snapshot) => {
          setRoomMessages(snapshot.docs.map((doc) => doc.data()));
        }
      );

      /*onSnapshot(doc(db, "rooms", roomId, "messages"), (doc) => {
        roomMessages(doc.data());
      });*/
    }
  }, [roomId]);
  console.log(roomMessages);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ id, message, timestamp, user, userimage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userimage={userimage}
            key={id}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
