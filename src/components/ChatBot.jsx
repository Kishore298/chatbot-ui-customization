import React, { useState } from "react";
import ChatBubble from "./ChatBubble";
import { FaPaperPlane, FaTimes, FaRobot } from "react-icons/fa"; // Added FaRobot for chatbot icon
import { FaArrowRight, FaRegPaperPlane, FaTelegramPlane } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { LuSendHorizonal } from "react-icons/lu";
import { RiSendPlaneLine } from "react-icons/ri";
import { MdOutlineSendToMobile } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";

const iconMapping = {
  "fa-paper-plane": <FaPaperPlane />,
  "fa-arrow-right": <FaArrowRight />,
  "fa-reg-paper-plane": <FaRegPaperPlane />,
  "fa-telegram-plane": <FaTelegramPlane />,
  "io-md-send": <IoMdSend />,
  "lu-send-horizontal": <LuSendHorizonal />,
  "ri-send-plane-line": <RiSendPlaneLine />,
  "md-outline-send-to-mobile": <MdOutlineSendToMobile />,
  "ai-outline-send": <AiOutlineSend />,
};

const ChatBot = ({ styles }) => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello dear user! How can I help you today?." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", text: input }]);
      setInput("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", text: "Thank you for your message!" },
        ]);
      }, 1000);
    }
  };

  const closeChatBot = () => {
    alert("Chatbot closed!");
  };

  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        border: `2px solid ${styles.borderColor}`,
        borderRadius: styles.borderRadius,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: styles.titleBgColor,
          color: "#ffffff",
          padding: "10px",
          fontFamily: styles.font,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaRobot style={{ fontSize: "28px", marginRight: "10px" }} />
          <div>
            <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}>Jinn Live</div>
            <div style={{ fontSize: "14px", color: "#d4d4d4" }}>Demo Chat</div>
          </div>
        </div>
        <button
          onClick={closeChatBot}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          <FaTimes />
        </button>
      </div>

      <div
        style={{
          flex: 1,
          padding: "10px",
          overflowY: "auto",
          backgroundColor: "#ffffff",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0",
              justifyContent: msg.type === "bot" ? "flex-start" : "flex-end",
            }}
          >
            {msg.type === "bot" && (
              <FaRobot style={{ fontSize: "28px", marginRight: "10px" }} />
            )}
            <ChatBubble type={msg.type} text={msg.text} styles={styles} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", padding: "10px" }}>
        <input
          type="text"
          placeholder="Ask us anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "5px",
            fontFamily: styles.font,
            fontSize: "16px",
            border:"none"
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            backgroundColor: "white",
            color: "gray",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            fontSize: "24px",
          }}
        >
          {iconMapping[styles.buttonIcon] || <FaPaperPlane />}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
