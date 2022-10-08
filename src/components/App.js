
import { useState } from "react";

import React from "react";
import CryptoTrack from "./CryptoTrack";
import Login from "./Login"
import Services from "./Services"
import About from "./About"
import NavBar from "./NavBar";


function App({ }) {
  const [page, setPage] = useState("/");
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

  
}

export default App;
