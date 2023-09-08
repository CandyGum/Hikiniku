import React from 'react';
import bgImage1 from "./images/human1.png";
import bgImage2 from "./images/human2.png";
import bgImage3 from "./images/human3.png";
import { useNavigate } from "react-router-dom";




export const SelectMoney = () => {
    const navigate = useNavigate()
    const Max_Soukin = "50000";
    const users = [
        {name:"サンプル太郎", url: bgImage1},
        {name:"サンプル次郎", url: bgImage2},
        {name:"サンプル三郎", url: bgImage3}
    ]


    /*<div className="container">
            <figure class="image"><img src={bgImage} /></figure>
            <div class="right">
            <p class="title">ユーザー名:ひき肉食べたい</p>
            <p class="text">口座番号:00000000<br/>
            預金残高:{zandaka}円</p>
            </div>
            
          </div> */

    return (
        <html>
            <head>
            </head>
            <body>
            <div className="Step1">
              <div className="container">
                <figure class="image"><img src={bgImage1} /></figure>
                {users.name}
                <div class="right">
            <p class="title">サンプル 氏名</p>
            <div class="button003">
            <p>送金上限金額：{Max_Soukin}円</p>
                <input
                    type="number"
                    placeholder="金額を入力"
                />
            <div class="button003">
              <button onClick={() => navigate("Top")}>送金</button>
            </div>
            </div>
              </div> 
            </div>
            
                {/* <button onClick={handleSendMoney}>送金</button> */}
            </div>
            
            </body>
        </html>
      )
};