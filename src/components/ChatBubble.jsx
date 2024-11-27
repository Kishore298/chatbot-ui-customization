import React from "react";

const ChatBubble = ({ type, text, styles }) => {
  const isUserMessage = type === "user";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUserMessage ? "flex-end" : "flex-start", 
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          maxWidth: "60%",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: isUserMessage
            ? styles.userBubbleBgColor
            : styles.botBubbleBgColor,
          color: isUserMessage ? styles.userTextColor : styles.botTextColor,
          fontFamily: styles.font,
          wordWrap: "break-word",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatBubble;
