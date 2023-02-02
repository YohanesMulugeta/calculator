import Items from "./Items";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="app">
      <div className="order_container flex  ">
        <label className=" label" htmlFor="order">
          Order Size
        </label>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          id="order"
          type="number"
          className="order_input"
        />
      </div>
      <Items orders={value} />
    </div>
  );
}

export default App;
