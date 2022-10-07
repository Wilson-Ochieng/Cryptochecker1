import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App({ handleChange }) {



  function App({ }) {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )

      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">CryptoChecker</h1>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="coin-input"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
