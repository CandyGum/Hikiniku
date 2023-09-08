import React, {Component} from 'react';

export const SendMoney = () => {

  const users = [
    {name:"サンプル太郎"},
    {name:"サンプル次郎"},
    {name:"サンプル三郎"}
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
            <li key={index}>{users.name}</li>
          ))}
        </ol>
        </body>
    </html>
  )
};
