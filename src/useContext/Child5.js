import { useContext } from "react";
import { CountContext } from "./CountContext";

const Child5 = () => {
  const [count, setCount] = useContext(CountContext);
  return (
    <div className="box-5">
      <div className="context-count">
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      </div>
    </div>
  );
};

export default Child5;
