import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []); // useEffect 빈 배열(아무것도 주시하지 않는 상태)은 최초 한 번만 작동함
  const [myMoney, setMyMoney] = useState(0);
  const [amount, setAmount] = useState(0);
  const onChange = (event) => {
    setMyMoney(event.target.value);
    console.log(event.target.value);
  }
  const onChangeSelect = (event) => {
    setAmount(event.target.value);
    console.log(event.target.value);
  }
  const usdToCoin = () => {
    return amount > 0 ? (myMoney / amount) : 0;
  }
  return (
    <div>
      <h1>coin converter</h1>
      <span>USD → </span>
      <select onChange={onChangeSelect}>
        <option value="0">선택</option>
        {coins.map((coin) => (
          <option 
            key={coin.id}
            value={coin.quotes.USD.price}
          >
            {coin.name}({coin.symbol})
          </option>
        ))}
      </select>
      <div>
        <input 
          type="number"
          onChange={onChange}
          value={myMoney}
          placeholder="USD 입력"
        /> USD =
        <span>{usdToCoin()}</span>
      </div>
    </div>
  );
}

export default App;
