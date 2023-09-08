import React from 'react';
import bgImage1 from "./images/human1.png";
import bgImage2 from "./images/human2.png";
import bgImage3 from "./images/human3.png";


function TransactionScreen({ recipient }) {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
  };

  const handleSendMoney = () => {
    // 送金処理を実行するコードをここに追加
  };

  return (
    <div>
      <h1>送金金額を入力</h1>
      <img src={recipient.image} alt={recipient.name} />
      <p>{recipient.name}</p>
      <p>送金上限金額: 1000円</p>
      <input
        type="number"
        placeholder="金額を入力"
        value={amount}
        onChange={handleAmountChange}
      />
      <button onClick={handleSendMoney}>送金</button>
    </div>
  );
}


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