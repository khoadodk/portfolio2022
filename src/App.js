import "./App.css";

import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  return (
    <div
      className="App"
    >
      <h1>Hello from react</h1>
    </div>
  );
}

export default App;