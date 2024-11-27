import React from "react";
import {
  FaPaperPlane,
  FaArrowRight,
  FaRegPaperPlane,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { LuSendHorizonal } from "react-icons/lu";
import { RiSendPlaneLine } from "react-icons/ri";
import { MdOutlineSendToMobile } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";

const iconOptions = [
  { value: "fa-paper-plane", icon: <FaPaperPlane /> },
  { value: "fa-arrow-right", icon: <FaArrowRight /> },
  { value: "fa-reg-paper-plane", icon: <FaRegPaperPlane /> },
  { value: "fa-telegram-plane", icon: <FaTelegramPlane /> },
  { value: "io-md-send", icon: <IoMdSend /> },
  { value: "lu-send-horizontal", icon: <LuSendHorizonal /> },
  { value: "ri-send-plane-line", icon: <RiSendPlaneLine /> },
  { value: "md-outline-send-to-mobile", icon: <MdOutlineSendToMobile /> },
  { value: "ai-outline-send", icon: <AiOutlineSend /> },
];

const Customizer = ({ styles, setStyles }) => {
  const updateStyle = (key, value) => {
    setStyles((prev) => ({ ...prev, [key]: value }));
  };

  const handleIconSelection = (iconValue) => {
    setStyles((prev) => ({ ...prev, buttonIcon: iconValue }));
  };

  return (
    <div className="customizer">
      <h2>Customize Your ChatBot</h2>
      <h3>With Wide Range of Customizations</h3>
<div className="customizer-sub">
      <label>
        Button Icon:
        <select
          value={styles.buttonIcon}
          onChange={(e) => handleIconSelection(e.target.value)}
        >
          {iconOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.icon} {option.value}
            </option>
          ))}
        </select>
      </label>

      <label>
        Text Font:
        <select
          value={styles.font}
          onChange={(e) => updateStyle("font", e.target.value)}
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="Courier New, monospace">Courier New</option>
          <option value="Tahoma, sans-serif">Tahoma</option>
          <option value="Verdana, sans-serif">Verdana</option>
          <option value="Times New Roman, serif">Times New Roman</option>
          <option value="Roboto, sans-serif">Roboto</option>
          <option value="Lato, sans-serif">Lato</option>
          <option value="Open Sans, sans-serif">Open Sans</option>
          <option value="Montserrat, sans-serif">Montserrat</option>
          <option value="Poppins, sans-serif">Poppins</option>
          <option value="Raleway, sans-serif">Raleway</option>
          <option value="Oswald, sans-serif">Oswald</option>
          <option value="Nunito, sans-serif">Nunito</option>
          <option value="Playfair Display, serif">Playfair Display</option>
          <option value="Raleway, sans-serif">Raleway</option>
          <option value="Ubuntu, sans-serif">Ubuntu</option>
          <option value="Merriweather, serif">Merriweather</option>
          <option value="PT Sans, sans-serif">PT Sans</option>
          <option value="Quicksand, sans-serif">Quicksand</option>
          <option value="Work Sans, sans-serif">Work Sans</option>
        </select>
      </label>
      <label>
        Border Radius:
        <input
          type="text"
          value={styles.borderRadius}
          onChange={(e) => updateStyle("borderRadius", e.target.value)}
        />
      </label>
      <label>
        Title Background Color:
        <input
          type="color"
          value={styles.titleBgColor}
          onChange={(e) => updateStyle("titleBgColor", e.target.value)}
        />
      </label>
      <label>
        Bot Bubble Background:
        <input
          type="color"
          value={styles.botBubbleBgColor}
          onChange={(e) => updateStyle("botBubbleBgColor", e.target.value)}
        />
      </label>
      <label>
        User Bubble Background:
        <input
          type="color"
          value={styles.userBubbleBgColor}
          onChange={(e) => updateStyle("userBubbleBgColor", e.target.value)}
        />
      </label>
      <label>
        Bot Text Color:
        <input
          type="color"
          value={styles.botTextColor}
          onChange={(e) => updateStyle("botTextColor", e.target.value)}
        />
      </label>

      <label>
        User Text Color:
        <input
          type="color"
          value={styles.userTextColor}
          onChange={(e) => updateStyle("userTextColor", e.target.value)}
        />
      </label>
      <label>
        Border Color:
        <input
          type="color"
          value={styles.borderColor}
          onChange={(e) => updateStyle("borderColor", e.target.value)}
        />
      </label>
      </div>
    </div>
  );
};

export default Customizer;
