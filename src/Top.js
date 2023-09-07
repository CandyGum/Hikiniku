import React, {Component} from 'react';
import bgImage from "./images/human1.png";
import { useNavigate } from "react-router-dom";

export const Top = () => {

  const navigate = useNavigate()
  return (
    <html>
        <head>
        </head>
        <body>
        <div className="Step1">
            <p>あ</p>
            <img src={bgImage} />
        </div>
        <button onClick={() => navigate("SendMoney")}>送金画面へ</button>
        </body>
    </html>
  )
};
//export default Step1;
