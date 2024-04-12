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
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name}({coin.symbol}): ${coin.quotes.USD.price}
            </li>
          ))}
        </ul>
      )
      }
    </div>
  );
}

export default App;
