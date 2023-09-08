import React from 'react';
import bgImage1 from "./images/human1.png";
import bgImage2 from "./images/human2.png";
import bgImage3 from "./images/human3.png";
import { useNavigate } from "react-router-dom";

export const SendMoney = () => {
  class User {

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }
  }
  //var user[];
  var taro = new User('太郎', 32);

  const users = [
    {name:"サンプル太郎", url: bgImage1},
    {name:"サンプル次郎", url: bgImage2},
    {name:"サンプル三郎", url: bgImage3}
  ]
  const imgStyle = {
    width: '70px', // 幅を調整
    height: '70px', // 高さを調整
  };
  const navigate = useNavigate()
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
              <img src={users.url} alt={users.name} style={imgStyle}/>
              {users.name}
            </li>
          ))}
        </ol>
        <p onClick={() => navigate("SlectMoney")}>{taro.age}</p>
        </body>
    </html>
  )
};