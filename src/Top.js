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
            
            <img src={bgImage} />

            <p>口座番号</p>
            <p>ユーザー名</p>
            <p>預金残高</p>
            <p></p>
            
        </div>
        <button onClick={() => navigate("SendMoney")}>送金画面へ</button>
        </body>
    </html>
  )
};
//export default Step1;
