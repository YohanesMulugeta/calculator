// import Items from "./Items";
import { useState } from "react";
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
          type="text"
          className="order_input"
        />
      </div>
    </div>
  );
}

export default App;
