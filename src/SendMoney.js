import React from 'react';
import bgImage1 from "./images/human1.png";
import bgImage2 from "./images/human2.png";
import bgImage3 from "./images/human3.png";

export const SendMoney = () => {

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
        
        <div className="SendMoney">
            <p>送金相手を選択</p>
        </div>
        

        <ol>
          {users.map((users, index) => (
            <li key={index}>
              <img src={users.url} alt={users.name} />
              {users.name}
            </li>
          ))}
        </ol>
        </body>
    </html>
  )
};
