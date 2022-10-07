import logo from './logo.svg';
import './App.css';

function App() {
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
            onChange={handleChange}/>
     
    </div>
  );
}

export default App;
