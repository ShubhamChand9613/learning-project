import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";

function App() {
  const[mode, setMode] = useState("light");

  const toggleMode = () =>{
    if(mode == 'light'){
      setMode("dark");
    } else {
      setMode("light");
    }
  }
  return (
    <>
      <Navbar title="Demo Projects" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <Textform/>
      </div>
      {/* <About></About> */}
    </>
  );
}

export default App;
