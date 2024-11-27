import React, { useState } from "react";
import ChatBot from "./components/ChatBot";
import Customizer from "./components/Customizer";
import "./App.css";

const App = () => {
  const [customStyles, setCustomStyles] = useState({
    buttonIcon: "➤",
    borderColor: "#000000",
    borderRadius: "5px",
    titleBgColor: "#000000",
    botBubbleBgColor: "#e5e5e5",
    botTextColor: "#000000",
    userBubbleBgColor: "#0078d7",
    userTextColor: "#ffffff",
    font: "Arial",
  });

  return (
    <div className="app-container">
      <div className="customizer-pane">
        <Customizer styles={customStyles} setStyles={setCustomStyles} />
      </div>
      <div className="chatbot-pane">
        <ChatBot styles={customStyles} />
      </div>
    </div>
  );
};

export default App;