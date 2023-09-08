import React, {Component} from 'react';
import bgImage from "./images/human1.png";
import { useNavigate } from "react-router-dom";
import './top.css';

export const Top = () => {

  const navigate = useNavigate()

//DBへのアクセスは後で
  const zandaka = "10000";

  return (
    <html>
        <head>
        </head>
        <body>
        <div className="Step1">
          <div className="container">
            <figure class="image"><img src={bgImage} /></figure>
            <div class="right">
            <p class="title">ユーザー名:ひき肉食べたい</p>
            <p class="text">口座番号:00000000<br/>
            預金残高:{zandaka}円</p>
            </div>
            
          </div> 
        </div>
        <div class="button003">
          <a hreh="#">
          <button onClick={() => navigate("SendMoney")}>送金画面へ</button>
          </a>
        </div>
        
        </body>
    </html>
  )
};
//export default Step1;
