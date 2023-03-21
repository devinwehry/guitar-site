import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  const add0ne = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Header title="My First React App" />
      <p>{count}</p>
      <button onClick={add0ne}>+1</button>
      <Footer />
    </div>
  );
}

export default App;
