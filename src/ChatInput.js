import React, { useState } from "react";
import "./ChatInput.css";
import db from "./firebase.js";
import { useStateValue } from "./StateProvider";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      addDoc(collection(db, "rooms", channelId, "messages"), {
        message: input,
        timestamp: serverTimestamp(),
        user: user?.displayName,
        userimage: user?.photoURL,
      });
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
