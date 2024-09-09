import React from "react";
import "./styles/App.css";
import OrderSummary from "./components/OrderSummary";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <OrderSummary />
      </div>
    </div>
  );
}

export default App;
