import { useState } from "react";
import { CountContext } from "./CountContext";
import Child1 from "./Child1";
import "./App.css";

const Container = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={[count, setCount]}>
        <div className="context-container">
          <Child1 />
          <div className="context-count">
            <p>{count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>
              Increase
            </button>
          </div>
        </div>
      </CountContext.Provider>
    </>
  );
};

export default Container;
