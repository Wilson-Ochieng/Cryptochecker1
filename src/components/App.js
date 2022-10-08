import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import Coin from "./Coin";
import MediaQuery from "react-responsive";
import CryptoTrack from "./CryptoTrack";
import Login from "./Login"
import Services from "./Services"
import About from "./About"
import NavBar from "./NavBar";



function App({ }) {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
      )

      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  
  const [page, setPage] = useState("/cryptotrack");
function getCurrentPage() {
  switch (page) {
    case "/":
      return <CryptoTrack />;
    case "/about":
      return <About />;
    case "/cryptotrack":
      return <CryptoTrack />;
    case "/login":
      return <Login />;
    case "/services":
      return <Services />;
    default:
      return <h1>404 not found</h1>;
  }
}
  return (
    <div>
      <NavBar onChangePage={setPage} />
      {getCurrentPage()}
    </div>
  );

  
   function handleChange(e) {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">CryptoTracker</h1>
        <MediaQuery minWidth={1224}></MediaQuery>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );

      })}
    </div>
  );
}

export default App;
