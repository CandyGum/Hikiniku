import React from 'react';
import bgImage1 from "./images/human1.png";
import bgImage2 from "./images/human2.png";
import bgImage3 from "./images/human3.png";




export const SelectMoney = () => {
    const users = [
        {name:"サンプル太郎", url: bgImage1},
        {name:"サンプル次郎", url: bgImage2},
        {name:"サンプル三郎", url: bgImage3}
    ]
    return (
        <html>
            <head>
            </head>
            <body>
            <div className="Step1">
              <div className="container">
                <figure class="image"><img src={bgImage1} /></figure>
                {users.name}
              </div> 
            </div>
            <div class="button003">
                <input
                    type="number"
                    placeholder="金額を入力"
                />
                {/* <button onClick={handleSendMoney}>送金</button> */}
            </div>
            
            </body>
        </html>
      )
};